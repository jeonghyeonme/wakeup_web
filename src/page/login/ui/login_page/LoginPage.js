import React, { useEffect, useRef } from "react";
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
import { useNavigate } from "react-router-dom";
import useLogin from "../../../../entities/login/useLoginCheck";
import { setCookie } from "../../../../shared/cookie/cookie";

const LoginPage = () => {
  const idRef = useRef();
  const pwRef = useRef();

  const handleClear = () => {
    idRef.current.clear();
    pwRef.current.clear();
  };

  const navigate = useNavigate();

  const [userIdx, setUserIdx, fetchData] = useLogin();
  const loginEvent = (id, pw) => {
    fetchData(id, pw);
  };

  useEffect(() => {
    if (!userIdx) return;
    setCookie("user_data", userIdx);
    navigate(`/${userIdx.type}`);
  }, [userIdx]);

  return (
    <Container>
      <Logo src={logo} alt="NEXT Logo" />
      <InputContainer>
        <InputPlaceHorder ref={idRef} placeholder="사용자 이름" />
        <InputLabel>
          <LinkText
            onClick={() => {
              navigate("/findId");
            }}>
            아이디찾기
          </LinkText>
        </InputLabel>
      </InputContainer>
      <InputContainer>
        <InputPlaceHorder ref={pwRef} placeholder="비밀번호" />
        <InputLabel>
          <LinkText
            onClick={() => {
              navigate("/findPw");
            }}>
            비밀번호 찾기
          </LinkText>
        </InputLabel>
      </InputContainer>
      <SubmitButton
        onClick={() => {
          loginEvent(idRef.current.getValue(), pwRef.current.getValue());
        }}>
        로그인
      </SubmitButton>
    </Container>
  );
};

export default LoginPage;
