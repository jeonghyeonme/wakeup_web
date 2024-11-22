import React, { useState } from "react";
import {
  PlaceholderContainer,
  PlaceholderText,
  PlaceholderInput,
} from "./style";

const InputPlaceHorder = () => {
  const [isActive, setIsActive] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    setIsActive(e.target.value.trim() !== "");
  };

  return (
    <PlaceholderContainer>
      <PlaceholderText active={isActive}>사용자 이름</PlaceholderText>
      <PlaceholderInput
        type="text"
        autocomplete="off"
        value={inputValue}
        onChange={handleInputChange}
        active={isActive}
      />
    </PlaceholderContainer>
  );
};

export default InputPlaceHorder;
