import { Input } from "@material-tailwind/react";
import React, { forwardRef } from "react";

const AppInput = forwardRef(
  (
    { fieldName, value, onChange, name, isInvalid, type, errorMessage },
    ref
  ) => {
    return (
      <div>
        <Input
          error={isInvalid}
          value={value}
          name={name}
          onChange={onChange}
          label={fieldName}
          className="py-6"
          ref={ref}
          type={type}
        />
        {isInvalid && (
          <span className="flex items-center mt-3 ml-1 text-xs font-medium tracking-wide text-red-500">
            {errorMessage}
          </span>
        )}
      </div>
    );
  }
);

export default AppInput;
