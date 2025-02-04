import React, { useState } from "react";
import STYLE from "./style";

const InputPlaceHorder = (props) => {
  const { placeholder, type, register } = props;
  const [active, setActive] = useState(false);

  // 입력 상태를 업데이트하는 함수
  const handleInputChange = (e) => {
    setActive(e.target.value.trim() !== ""); // 입력 값이 있으면 활성화
  };

  return (
    <STYLE.PlaceholderContainer>
      <STYLE.PlaceholderText $active={active}>
        {placeholder}
      </STYLE.PlaceholderText>
      <STYLE.PlaceholderInput
        $active={active}
        type={type}
        autoComplete="off"
        {...register} // register 함수에서 반환된 속성 사용
        onChange={(e) => {
          handleInputChange(e); // 추가 입력 상태 관리
        }}
      />
    </STYLE.PlaceholderContainer>
  );
};

export default InputPlaceHorder;
