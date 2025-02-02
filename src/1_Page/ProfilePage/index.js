import React from "react";
import STYLE from "./style";
import logo from "../../4_Shared/assets/logo.svg";

import { useNavigate } from "react-router-dom";

const ProfilePage = () => {
  const navigate = useNavigate();

  const data = {};

  return (
    <STYLE.PageContainer>
      <STYLE.Logo src={logo} alt="NEXT Logo" />
      <STYLE.InputContainer>
        <STYLE.InputWrapper>
          <STYLE.InputLabel>이름</STYLE.InputLabel>
          <STYLE.InputField type="text" value={data.name} readOnly />
        </STYLE.InputWrapper>
        <STYLE.InputWrapper>
          <STYLE.InputLabel>아이디</STYLE.InputLabel>
          <STYLE.InputField type="text" value={data.id} readOnly />
        </STYLE.InputWrapper>
        <STYLE.InputWrapper>
          <STYLE.InputLabel>전화번호</STYLE.InputLabel>
          <STYLE.InputField type="text" value={data.phone} readOnly />
        </STYLE.InputWrapper>
        <STYLE.InputWrapper>
          <STYLE.InputLabel>회사</STYLE.InputLabel>
          <STYLE.InputField type="text" value={data.company} readOnly />
        </STYLE.InputWrapper>
        <STYLE.InputWrapper>
          <STYLE.InputLabel>집</STYLE.InputLabel>
          <STYLE.InputField type="text" value={data.home} readOnly />
        </STYLE.InputWrapper>
      </STYLE.InputContainer>
      <STYLE.SubmitButton>로그아웃</STYLE.SubmitButton>
    </STYLE.PageContainer>
  );
};

export default ProfilePage;
