import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import STYLE from "./style";
import logo from "../../4_Shared/assets/logo.svg";
import { useNavigate } from "react-router-dom";
import InputFieldComponent from "./ui/InputFiled";

// 유효성 검사 스키마 정의
const validationSchema = yup.object().shape({
  name: yup.string().required("이름을 입력하세요."),
  phone: yup
    .string()
    .matches(/^010-\d{4}-\d{4}$/, "올바른 전화번호 형식이 아닙니다.")
    .required("전화번호를 입력하세요."),
  company: yup.string().required("회사를 입력하세요."),
});

const FindIdPage = () => {
  const navigate = useNavigate();

  // useForm 훅 사용
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  // 폼 제출 핸들러
  const onSubmit = (data) => {
    console.log("입력된 데이터:", data);
    // 아이디 찾기 로직 추가 가능
  };

  return (
    <STYLE.PageContainer>
      <STYLE.Logo src={logo} alt="NEXT Logo" />
      <STYLE.InputContainer onSubmit={handleSubmit(onSubmit)}>
        <InputFieldComponent
          label="이름"
          type="text"
          placeholder="이름을 입력하세요"
          register={register("name")}
          error={errors.name}
        />
        <InputFieldComponent
          label="전화번호 (010-1234-1234)"
          type="text"
          placeholder="전화번호를 입력하세요"
          register={register("phone")}
          error={errors.phone}
        />
        <InputFieldComponent
          label="회사"
          type="text"
          placeholder="회사를 입력하세요"
          register={register("company")}
          error={errors.company}
        />
      </STYLE.InputContainer>

      <STYLE.ButtonContainer>
        <STYLE.SubmitButton type="submit" onClick={handleSubmit(onSubmit)}>
          아이디 찾기
        </STYLE.SubmitButton>
        <STYLE.SubmitButton onClick={() => navigate("/")}>
          뒤로가기
        </STYLE.SubmitButton>
      </STYLE.ButtonContainer>
    </STYLE.PageContainer>
  );
};

export default FindIdPage;
