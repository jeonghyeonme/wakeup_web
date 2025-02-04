import React from "react";
import STYLE from "./style";
import logo from "../../4_Shared/assets/logo.svg";

import useGetMyInfo from "../../3_Entities/Account/useGetMyInfo";
import useLogout from "../../4_Shared/model/useLogout";

const ProfilePage = () => {
  const [myInfo] = useGetMyInfo();
  const [logout] = useLogout();

  return (
    <STYLE.PageContainer>
      <STYLE.Logo src={logo} alt="NEXT Logo" />
      <STYLE.InputContainer>
        <STYLE.InputWrapper>
          <STYLE.InputLabel>이름</STYLE.InputLabel>
          <STYLE.InputField type="text" value={myInfo?.name} readOnly />
        </STYLE.InputWrapper>
        <STYLE.InputWrapper>
          <STYLE.InputLabel>아이디</STYLE.InputLabel>
          <STYLE.InputField type="text" value={myInfo?.id} readOnly />
        </STYLE.InputWrapper>
        <STYLE.InputWrapper>
          <STYLE.InputLabel>전화번호</STYLE.InputLabel>
          <STYLE.InputField type="text" value={myInfo?.phone} readOnly />
        </STYLE.InputWrapper>
        <STYLE.InputWrapper>
          <STYLE.InputLabel>회사</STYLE.InputLabel>
          <STYLE.InputField type="text" value={myInfo?.company} readOnly />
        </STYLE.InputWrapper>
        <STYLE.InputWrapper>
          <STYLE.InputLabel>집</STYLE.InputLabel>
          <STYLE.InputField type="text" value={myInfo?.home} readOnly />
        </STYLE.InputWrapper>
      </STYLE.InputContainer>
      <STYLE.SubmitButton onClick={logout}>로그아웃</STYLE.SubmitButton>
    </STYLE.PageContainer>
  );
};

export default ProfilePage;
