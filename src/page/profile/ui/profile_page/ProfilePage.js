import React, { useEffect, useState } from "react";
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
import { deleteAllCookies, getCookie } from "../../../../shared/cookie/cookie";
import { useNavigate } from "react-router-dom";

const ProfilePage = () => {
  const navigate = useNavigate();

  const logout = () => {
    deleteAllCookies();
    navigate("/");
  };
  // 한 번만 호출하여 cookieData 저장
  const initialCookieData = getCookie("user_data");
  const [data] = useState(initialCookieData);

  if (!data) return <p>Loading...</p>;

  return (
    <PageContainer>
      <Logo src={logo} alt="NEXT Logo" />
      <InputContainer>
        <InputWrapper>
          <InputLabel>이름</InputLabel>
          <InputField type="text" value={data.name} readOnly />
        </InputWrapper>
        <InputWrapper>
          <InputLabel>아이디</InputLabel>
          <InputField type="text" value={data.id} readOnly />
        </InputWrapper>
        <InputWrapper>
          <InputLabel>전화번호</InputLabel>
          <InputField type="text" value={data.phone} readOnly />
        </InputWrapper>
        <InputWrapper>
          <InputLabel>회사</InputLabel>
          <InputField type="text" value={data.company} readOnly />
        </InputWrapper>
        <InputWrapper>
          <InputLabel>집</InputLabel>
          <InputField type="text" value={data.home} readOnly />
        </InputWrapper>
      </InputContainer>
      <SubmitButton onClick={logout}>로그아웃</SubmitButton>
    </PageContainer>
  );
};

export default ProfilePage;
