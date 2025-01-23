import React from "react";
import STYLE from "./style";

const InputField = ({ label, type, placeholder, register, error }) => {
  return (
    <STYLE.InputWrapper>
      <STYLE.InputLabel>{label}</STYLE.InputLabel>
      <STYLE.InputField type={type} placeholder={placeholder} {...register} />
      {error && <p style={{ color: "red" }}>{error.message}</p>}
    </STYLE.InputWrapper>
  );
};

export default InputField;
