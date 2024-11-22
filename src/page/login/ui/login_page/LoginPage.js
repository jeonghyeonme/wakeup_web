import React from "react";
import {
  Container,
  Logo,
  InputContainer,
  InputLabel,
  LinkText,
  SubmitButton,
} from "./style";
import logo from "../../../../shared/assets/logo.svg";
import InputPlaceHorder from "../input_placehorder/InputPlaceHorder";

const LoginPage = () => {
  return (
    <Container>
      <Logo src={logo} alt="NEXT Logo" />
      <InputContainer>
        <InputPlaceHorder />
        <InputLabel>
          <LinkText>아이디찾기</LinkText>
        </InputLabel>
      </InputContainer>
      <InputContainer>
        <InputPlaceHorder />
        <InputLabel>
          <LinkText>비밀번호 찾기</LinkText>
        </InputLabel>
      </InputContainer>
      <SubmitButton>로그인</SubmitButton>
    </Container>
  );
};

export default LoginPage;
