import { FirebaseError } from "@firebase/util";
import { Typography } from "@material-tailwind/react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast, Toaster } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/icon-logo.png";
import AppButton from "../../components/ui/AppButton";
import AppInput from "../../components/ui/AppInput";
import { loginUser } from "../../firebase/services/authentication";
import { addUserToLocalStorage } from "../../utils/auth";

function CompanyLogin() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  async function handleCompanyLogin(formData) {
    const { email, password } = formData;
    setIsLoading(true);
    try {
      const loggedInUser = await loginUser(email, password);
      addUserToLocalStorage(loggedInUser);
      navigate("/company/home");
    } catch (error) {
      if (error instanceof FirebaseError) {
        if (error.code === "auth/wrong-password" || "auth/user-not-found") {
          toast.error("Invalid email or password");
        }
      }
    } finally {
      setIsLoading(false);
    }
  }
  return (
    <div>
      <div className="flex flex-col justify-center h-screen text-center gap-y-10">
        <Link to="/welcome">
          <img src={logo} alt="logo" className="w-64 mx-auto" />
        </Link>
        <Typography
          color="blue-gray"
          className="font-bold text-xl bg-gradient-to-r from-blue-800 via-sky-900 to-indigo-500 to-[#5588a399] text-transparent bg-clip-text"
        >
          Login As Gas Station
        </Typography>
        <form className="flex flex-col px-6 gap-y-8 sm:px-60" onSubmit={handleSubmit(handleCompanyLogin)}>
          <AppInput
            fieldName="Email"
            type="email"
            isInvalid={!!errors.email}
            errorMessage={errors.email?.message}
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                message: "Enter a valid email",
              },
            })}
          />

          <AppInput
            fieldName="Password"
            type="password"
            isInvalid={!!errors.password}
            errorMessage={errors.password?.message}
            {...register("password", {
              required: "Password is required",
              pattern: {
                value: /^.{8,}$/,
                message: "Password should be at least 8 characters",
              },
            })}
          />
          <AppButton type="submit" loading={isLoading} loadingText="Sending...">
            SIGN IN
          </AppButton>

          <Typography className="text-[#0D98E5] cursor-pointer font-normal">
            <Link to="/company/reset-password">Forget Your Password?</Link>
          </Typography>
          <Typography className="font-normal">
            Don’t have an account?
            <span className="text-[#0D98E5] cursor-pointer">
              <Link to="/company/register"> Sign Up </Link>
            </span>
          </Typography>
          <Toaster />
        </form>
      </div>
    </div>
  );
}

export default CompanyLogin;
