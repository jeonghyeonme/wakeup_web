import React from "react";
import STYLE from "./style";

const InputField = (props) => {
  const { label, type, placeholder, register, error, onInputChange } = props;
  return (
    <STYLE.InputWrapper>
      <STYLE.InputLabel>{label}</STYLE.InputLabel>
      <STYLE.InputField
        type={type}
        placeholder={placeholder}
        {...register}
        onChange={onInputChange}
      />
      <STYLE.ErrorMessageContainer>
        <STYLE.ErrorMessage>{error && error.message}</STYLE.ErrorMessage>
      </STYLE.ErrorMessageContainer>
    </STYLE.InputWrapper>
  );
};

export default InputField;
