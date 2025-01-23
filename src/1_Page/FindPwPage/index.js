import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import STYLE from "./style";

import useResultHandler from "./model/useResultHandler";

import ConfirmModal from "../../2_Widget/ConfirmModal";

import InputFieldComponent from "../../2_Widget/InputFiled";
import logo from "../../4_Shared/assets/logo.svg";

// 유효성 검사 스키마 정의
const schema = yup.object({
  id: yup.string().required("아이디를 입력하세요."),
  phone: yup
    .string()
    .matches(/^\d{3}-\d{3,4}-\d{4}$/, "올바른 전화번호 형식이 아닙니다.")
    .required("전화번호를 입력하세요."),
  company: yup.string().required("회사를 입력하세요."),
});

const FindPwPage = () => {
  const navigate = useNavigate();

  // react-hook-form 사용 설정
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const { message, closeModalToLogin, isModalOpen, onSubmit } =
    useResultHandler();

  return (
    <>
      <STYLE.PageContainer>
        <STYLE.Logo src={logo} alt="NEXT Logo" />
        <STYLE.InputContainer onSubmit={handleSubmit(onSubmit)}>
          <InputFieldComponent
            label="아이디"
            type="text"
            placeholder="아이디를 입력하세요"
            register={register("id")}
            error={errors.id}
          />
          <InputFieldComponent
            label="전화번호 ( 010-1234-5678 )"
            type="text"
            placeholder="전화번호를 입력하세요 "
            register={register("phone")}
            error={errors.phone}
          />
          <InputFieldComponent
            label="회사"
            type="text"
            placeholder="회사 사무명을 입력하세요"
            register={register("company")}
            error={errors.company}
          />
        </STYLE.InputContainer>

        <STYLE.ButtonContainer>
          <STYLE.SubmitButton onClick={handleSubmit(onSubmit)}>
            비밀번호 찾기
          </STYLE.SubmitButton>
          <STYLE.SubmitButton
            onClick={() => {
              navigate("/");
            }}>
            뒤로가기
          </STYLE.SubmitButton>
        </STYLE.ButtonContainer>
      </STYLE.PageContainer>
      {isModalOpen && (
        <ConfirmModal
          message={message}
          onClose={closeModalToLogin}
          type="one"
        />
      )}
    </>
  );
};

export default FindPwPage;
