import React from "react";
import STYLE from "./style";

const InputField = (props) => {
  const { label, type, placeholder, register, error } = props;
  return (
    <STYLE.InputWrapper>
      <STYLE.InputLabel>{label}</STYLE.InputLabel>
      <STYLE.InputField type={type} placeholder={placeholder} {...register} />
      {error && <p style={{ color: "red" }}>{error.message}</p>}
    </STYLE.InputWrapper>
  );
};

export default InputField;
