import React from "react";
import {
  PageContainer,
  Logo,
  InputWrapper,
  InputLabel,
  InputField,
  SubmitButton,
  InputContainer,
} from "./style";
import logo from "../../../../shared/assets/logo.svg";

const FindIdPage = () => {
  return (
    <PageContainer>
      <Logo src={logo} alt="NEXT Logo" />
      <InputContainer>
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
      <SubmitButton>아이디 찾기</SubmitButton>
    </PageContainer>
  );
};

export default FindIdPage;
