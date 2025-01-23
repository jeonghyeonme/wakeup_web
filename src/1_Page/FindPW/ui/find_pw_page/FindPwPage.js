import React, { useEffect, useRef } from "react";
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
import useFindPw from "../../../../entities/find_pw/useFindPw";

const FindPwPage = () => {
  const navigate = useNavigate();
  const [password, setPassword, fetchData] = useFindPw();
  const idRef = useRef(null);
  const phoneRef = useRef(null);
  const companyRef = useRef(null);

  const findPwEvent = () => {
    fetchData(
      idRef.current.value,
      phoneRef.current.value,
      companyRef.current.value
    );
  };

  useEffect(() => {
    setPassword(null);
    if (password) {
      navigate("/");
    }
  }, [password]);

  return (
    <PageContainer>
      <Logo src={logo} alt="NEXT Logo" />
      <InputContainer>
        <InputWrapper>
          <InputLabel>아이디</InputLabel>
          <InputField
            ref={idRef}
            type="text"
            placeholder="아이디를 입력하세요"
          />
        </InputWrapper>
        <InputWrapper>
          <InputLabel>전화번호</InputLabel>
          <InputField
            ref={phoneRef}
            type="text"
            placeholder="전화번호를 입력하세요"
          />
        </InputWrapper>
        <InputWrapper>
          <InputLabel>회사</InputLabel>
          <InputField
            ref={companyRef}
            type="text"
            placeholder="회사를 입력하세요"
          />
        </InputWrapper>
      </InputContainer>
      <div></div>
      <ButtonContainer>
        <SubmitButton onClick={findPwEvent}>비밀번호 찾기</SubmitButton>
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
