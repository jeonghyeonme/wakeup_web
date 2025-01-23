import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

import { STYLE } from "./style";
import useLoginHandler from "./model/useLoginHandler";

import ErrorModal from "../../2_Widget/ConfirmModal";
import InputPlaceHorder from "../../2_Widget/InputPlaceHorder";
import logo from "../../4_Shared/assets/logo.svg";

const LoginPage = () => {
  const idRef = useRef();
  const pwRef = useRef();
  const navigate = useNavigate();
  const { loginClick, errorMessage, isModalOpen, toggleModal } =
    useLoginHandler(idRef, pwRef);

  return (
    <>
      <STYLE.Container>
        <STYLE.Logo src={logo} alt="NEXT Logo" />
        <STYLE.Form>
          <InputPlaceHorder ref={idRef} placeholder="아이디" type="text" />
          <InputPlaceHorder
            ref={pwRef}
            placeholder="비밀번호"
            type="password"
          />
          <STYLE.SubmitButton onClick={loginClick}>로그인</STYLE.SubmitButton>
          <STYLE.AdditionalLinks>
            <STYLE.LinkText onClick={() => navigate("/findid")}>
              아이디 찾기
            </STYLE.LinkText>
            <STYLE.LinkText onClick={() => navigate("/findpw")}>
              비밀번호 찾기
            </STYLE.LinkText>
          </STYLE.AdditionalLinks>
        </STYLE.Form>
      </STYLE.Container>
      {isModalOpen && (
        <ErrorModal onClose={toggleModal} type="one" message={errorMessage} />
      )}
    </>
  );
};

export default LoginPage;
