import { FirebaseError } from "@firebase/util";
import { Typography } from "@material-tailwind/react";
import Multiselect from "multiselect-react-dropdown";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/icon-logo.png";
import AppButton from "../../components/ui/AppButton";
import AppInput from "../../components/ui/AppInput";
import { registerNewUser, registerUserRole } from "../../firebase/services/authentication";
import { registerNewCompanyToDb } from "../../firebase/services/company";
import { addUserToLocalStorage } from "../../utils/auth";

function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [position, setPosition] = useState(null);
  const [services, setServices] = useState([]);
  const [isPositionInvalid, setIsPositionInvalid] = useState();
  const [isServicesInvalid, setIsServicesInvalid] = useState();

  async function handleCompanyRegister(formData) {
    if (!position) {
      setIsPositionInvalid(true);
      return;
    }
    if (services.length === 0) {
      setIsServicesInvalid(true);
      return;
    }
    const { email, password, companyName, phoneNumber, address, hours } = formData;
    try {
      setIsLoading(true);
      const newUser = await registerNewUser(email, password, companyName);
      let companyData = {
        email,
        companyName,
        phoneNumber,
        address,
        hours,
        services,
        location: position,
      };
      await registerNewCompanyToDb(companyData);
      await registerUserRole(newUser.uid, "company");
      addUserToLocalStorage(newUser);
      navigate("/company/home");
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

  const detectLocation = () => {
    const successCallback = (position) => {
      setPosition({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      });
      setIsPositionInvalid(false);
    };

    const errorCallback = (error) => {
      console.log(error);
    };

    navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
  };

  return (
    <div>
      <div className="my-10 gap-y-10">
        <Link to="/welcome">
          <img src={logo} alt="logo" className="w-64 mx-auto" />
        </Link>
        <Typography
          color="blue-gray"
          className="font-bold text-xl bg-gradient-to-r from-blue-800 via-sky-900 to-indigo-500 text-transparent bg-clip-text text-center py-5"
        >
          CREATE ACCOUNT
        </Typography>
        <form className="flex flex-col px-6 gap-y-6" onSubmit={handleSubmit(handleCompanyRegister)}>
          <AppInput
            fieldName="Gas Station Name"
            isInvalid={!!errors.companyName}
            errorMessage={errors.companyName?.message}
            {...register("companyName", {
              required: "Gas Station name is required",
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
            fieldName="Address"
            isInvalid={!!errors.address}
            errorMessage={errors.address?.message}
            {...register("address", {
              required: "Address is Requied",
            })}
          />
          <AppInput
            fieldName="Working Hours"
            isInvalid={!!errors.hours}
            errorMessage={errors.hours?.message}
            {...register("hours", {
              required: "Working Hours is Requied",
            })}
          />
          <div className="flex flex-col rounded-md border border-gray-400 p-2 gap-2 text-gray-800">
            <span className="flex gap-1 w-full">
              longitude:
              <input
                type="text"
                name="long"
                value={position?.lng ?? ""}
                placeholder="Company longitude"
                id="long"
                className="rounded-md border border-gray-400 outline-none pl-2"
              />
            </span>
            <span className="flex gap-1 w-full">
              Latitude:
              <input
                type="text"
                value={position?.lat ?? ""}
                placeholder="Company latitude"
                name="lat"
                id="lat"
                className="rounded-md border border-gray-400 outline-none pl-2"
              />
            </span>
            <span>
              <input type="checkbox" id="location" name="location" onClick={detectLocation} />
              &nbsp;
              <label for="location">
                Please check to Enter Company location and &nbsp;
                <span className="text-[#0D98E5] cursor-pointer">Make sure you are on Site</span>
              </label>
            </span>
            {isPositionInvalid && (
              <span className="flex items-center justify-center text-center mt-3 ml-1 text-xs font-medium tracking-wide text-red-500">
                Company location is required
              </span>
            )}
          </div>
          <div className="w-full flex gap-2 flex-col">
            <label> Services</label>
            <Multiselect
              displayValue="key"
              onKeyPressFn={function noRefCheck() {}}
              onRemove={function noRefCheck(selectedList) {
                setServices(selectedList.map((option) => option.key));
              }}
              onSearch={function noRefCheck() {}}
              onSelect={function noRefCheck(selectedList) {
                setIsServicesInvalid(false);
                setServices(selectedList.map((option) => option.key));
              }}
              options={[
                {
                  cat: "Group 1",
                  key: "Fuel Refill",
                },
                {
                  cat: "Group 2",
                  key: "Diesel Refill",
                },
                {
                  cat: "Group 3",
                  key: "Oil Change",
                },
                {
                  cat: "Group 4",
                  key: "Cooking Gas",
                },
              ]}
            />
            <span className="flex items-center text-center -mt-1 ml-1 text-xs font-medium tracking-wide text-red-500">
              {isServicesInvalid && "Service is required"}
            </span>
          </div>

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

          <div className="flex text-gray-800 gap-x-3">
            <input
              type="checkbox"
              id="terms"
              name="terms"
              value="Terms"
              {...register("checkbox", {
                required: "You need to accept to our terms",
              })}
            />
            <label for="terms">
              I accept &nbsp;
              <span className="text-[#0D98E5] cursor-pointer">Terms && Conditions</span>
            </label>
          </div>
          <span className="flex items-center text-center -mt-4 ml-1 text-xs font-medium tracking-wide text-red-500">
            {!!errors.checkbox && errors.checkbox?.message}
          </span>
          <AppButton type="submit" loading={isLoading} loadingText="Sending...">
            SIGN UP
          </AppButton>
          <Typography className="font-normal">
            Already Have An Account?{" "}
            <span className="text-[#0D98E5] cursor-pointer">
              <Link to="/company/login"> Login </Link>
            </span>
          </Typography>
        </form>
        <Toaster />
      </div>
    </div>
  );
}

export default SignUp;
