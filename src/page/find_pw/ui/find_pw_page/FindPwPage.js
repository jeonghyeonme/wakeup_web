import React from "react";
import {
  PageContainer,
  Logo,
  InputWrapper,
  InputLabel,
  InputField,
  SubmitButton,
  InputContainer,
  ButtonContainer,
} from "./style";
import logo from "../../../../shared/assets/logo.svg";
import { useNavigate } from "react-router-dom";

const FindPwPage = () => {
  const navigate = useNavigate();
  return (
    <PageContainer>
      <Logo src={logo} alt="NEXT Logo" />
      <InputContainer>
        <InputWrapper>
          <InputLabel>아이디</InputLabel>
          <InputField type="text" placeholder="아이디를 입력하세요" />
        </InputWrapper>
        <InputWrapper>
          <InputLabel>전화번호</InputLabel>
          <InputField type="text" placeholder="전화번호를 입력하세요" />
        </InputWrapper>
        <InputWrapper>
          <InputLabel>회사</InputLabel>
          <InputField type="text" placeholder="회사를 입력하세요" />
        </InputWrapper>
      </InputContainer>
      <div></div>
      <ButtonContainer>
        <SubmitButton>비밀번호 찾기</SubmitButton>
        <SubmitButton
          onClick={() => {
            navigate("/");
          }}>
          뒤로가기
        </SubmitButton>
      </ButtonContainer>
    </PageContainer>
  );
};

export default FindPwPage;
