import React, {
  useState,
  forwardRef,
  useRef,
  useImperativeHandle,
} from "react";
import {
  PlaceholderContainer,
  PlaceholderText,
  PlaceholderInput,
} from "./style";

const InputPlaceHorder = forwardRef((props, ref) => {
  const inputRef = useRef();
  const [isActive, setIsActive] = useState(false);
  const [inputValue, setInputValue] = useState("");

  // 입력 값이 변경될 때 호출
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    setIsActive(e.target.value.trim() !== ""); // 값이 비어 있는지 확인
  };

  // 부모가 사용할 수 있는 메서드 정의
  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus(); // 포커스 설정
    },
    clear: () => {
      setInputValue(""); // 입력 필드 초기화
      setIsActive(false); // Placeholder 상태 초기화
    },
    getValue: () => inputValue, // 현재 입력 값을 반환
  }));

  return (
    <PlaceholderContainer>
      <PlaceholderText active={isActive}>{props.placeholder}</PlaceholderText>
      <PlaceholderInput
        ref={inputRef}
        type={props.type}
        autoComplete="off"
        value={inputValue}
        onChange={handleInputChange}
        active={isActive}
      />
    </PlaceholderContainer>
  );
});

export default InputPlaceHorder;
