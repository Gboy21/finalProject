import { Typography } from "@material-tailwind/react";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/icon-logo.png";
import AppButton from "../../components/ui/AppButton";
import AppInput from "../../components/ui/AppInput";
import {FirebaseError} from "@firebase/util";


function CompanyResetPassword() {
  return (
    <>
      <div className="flex flex-col justify-center h-screen  gap-y-20">
        <Link to="/welcome">
          <img src={logo} alt="logo" className="w-64 mx-auto" />
        </Link>
        <div className="flex flex-col gap-5 px-4 py-5 mx-6 rounded-lg">
          <Typography className="pb-5 text-xl font-bold text-center">RESET PASSWORD</Typography>
          <Typography className="text-sm text-center">Provide Your Email To Reset Your Password</Typography>
          <div className="flex flex-col gap-y-10">
            <div className="w-full">
              <AppInput fieldName="Email" />
            </div>
            <div>
              <AppButton>SUBMIT</AppButton>
            </div>
            <div className="text-center">
              <Link to="/company/login" className="cursor-pointer hover:[#5588a399]">
                Back To Login ?{" "}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CompanyResetPassword;
