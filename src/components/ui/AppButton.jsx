import { Button } from "@material-tailwind/react";
import React from "react";
import Spinner from "./Spinner";

function AppButton({ children, variant, onClick, type, loading, loadingText }) {
  return (
    <div>
      <Button
        variant={variant}
        className="w-full p-4 text-lg bg-gradient-to-r from-blue-800 via-sky-900 to-indigo-500 to-[#5588a399]"
        onClick={onClick}
        type={type}
      >
        {loading ? (
          <span className="flex w-full justify-center gap-[4px] items-center">
            <Spinner />
            {loadingText}
          </span>
        ) : (
          children
        )}
      </Button>
    </div>
  );
}

export default AppButton;
