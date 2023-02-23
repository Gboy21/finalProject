import { FirebaseError } from "@firebase/util";
import { Typography } from "@material-tailwind/react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/icon-logo.png";
import AppButton from "../../components/ui/AppButton";
import AppInput from "../../components/ui/AppInput";
import { registerNewUser, registerUserRole } from "../../firebase/services/authentication";
import { registerNewUserToDb } from "../../firebase/services/user";
import { addUserToLocalStorage } from "../../utils/auth";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  async function handleUserRegister(formData) {
    const { email, password, userName, phoneNumber } = formData;
    try {
      setIsLoading(true);
      const newUser = await registerNewUser(email, password, userName);
      const userId = newUser.uid;
      let userData = { email, userName, phoneNumber, userId };
      await registerNewUserToDb(userData);
      await registerUserRole(newUser.uid, "user");
      addUserToLocalStorage(newUser);
      navigate("/user/home");
    } catch (error) {
      if (error instanceof FirebaseError) {
        if (error.code === "auth/email-already-in-use") {
          toast.error("A user with this email already exist");
        }
      }
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div>
      <div className="flex flex-col justify-center h-screen mt-10 text-center gap-y-10">
        <Link to="/welcome">
          <img src={logo} alt="logo" className="w-64 mx-auto" />
        </Link>
        <Typography
          color="blue-gray"
          className="font-bold text-xl bg-gradient-to-r from-blue-800 via-sky-900 to-indigo-500 text-transparent bg-clip-text"
        >
          CREATE ACCOUNT
        </Typography>
        <form className="flex flex-col px-6 gap-y-8 sm:px-60" onSubmit={handleSubmit(handleUserRegister)}>
          <AppInput
            fieldName="Full Name"
            isInvalid={!!errors.userName}
            errorMessage={errors.userName?.message}
            {...register("userName", {
              required: "User name is required",
            })}
          />
          <AppInput
            fieldName="Phone Number"
            isInvalid={!!errors.phoneNumber}
            errorMessage={errors.phoneNumber?.message}
            {...register("phoneNumber", {
              required: "Phone number is required",
              pattern: {
                value: /^(07[238][0-9]{7})$/,
                message: "Enter a valid phone number",
              },
            })}
          />
          <AppInput
            fieldName="Email"
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
            SIGN UP
          </AppButton>
          <Typography className="font-normal">
            Already Have An Account?
            <span className="text-[#0D98E5] cursor-pointer">
              <Link to="/user/login"> Login </Link>
            </span>
          </Typography>
          <Toaster />
        </form>
      </div>
    </div>
  );
};

export default SignUp;
