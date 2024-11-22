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

const ProfilePage = () => {
  return (
    <PageContainer>
      <Logo src={logo} alt="NEXT Logo" />
      <InputContainer>
        <InputWrapper>
          <InputLabel>아이디</InputLabel>
          <InputField type="text" placeholder="아이디를 입력하세요" />
        </InputWrapper>
        <InputWrapper>
          <InputLabel>비밀번호</InputLabel>
          <InputField type="text" placeholder="비밀번호" />
        </InputWrapper>
        <InputWrapper>
          <InputLabel>비밀번호 확인</InputLabel>
          <InputField type="text" placeholder="비밀번호 확인" />
        </InputWrapper>
        <InputWrapper>
          <InputLabel>전화번호</InputLabel>
          <InputField type="text" placeholder="전화번호를 입력하세요" />
        </InputWrapper>
        <InputWrapper>
          <InputLabel>회사</InputLabel>
          <InputField type="text" placeholder="회사를 입력하세요" />
        </InputWrapper>
        <InputWrapper>
          <InputLabel>집</InputLabel>
          <InputField type="text" placeholder="회사를 입력하세요" />
        </InputWrapper>
        <InputWrapper>
          <InputLabel>전화번호</InputLabel>
          <InputField type="text" placeholder="회사를 입력하세요" />
        </InputWrapper>
      </InputContainer>
      <SubmitButton>계정 수정</SubmitButton>
    </PageContainer>
  );
};

export default ProfilePage;
