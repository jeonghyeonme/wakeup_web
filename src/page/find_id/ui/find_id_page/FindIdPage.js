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
import useFindId from "../../../../entities/find_id/useFindId";

const FindIdPage = () => {
  const navigate = useNavigate();
  const [id, setId, fetchData] = useFindId();
  const idRef = useRef(null);
  const phoneRef = useRef(null);
  const companyRef = useRef(null);

  const findIdEvent = () => {
    fetchData(
      idRef.current.value,
      phoneRef.current.value,
      companyRef.current.value
    );
  };
  useEffect(() => {
    setId(null);
    if (id) {
      navigate("/");
    }
  }, [id]);

  return (
    <PageContainer>
      <Logo src={logo} alt="NEXT Logo" />
      <InputContainer>
        <InputWrapper>
          <InputLabel>이름</InputLabel>
          <InputField ref={idRef} type="text" placeholder="이름을 입력하세요" />
        </InputWrapper>
        <InputWrapper>
          <InputLabel>전화번호 (010-1234-1234)</InputLabel>
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
        <SubmitButton onClick={findIdEvent}>아이디 찾기</SubmitButton>
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

export default FindIdPage;
