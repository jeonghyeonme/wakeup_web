import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import STYLE from "./style";

import regexPatterns from "../../4_Shared/util/regexPatterns"; // 정규식 import

import InputFieldComponent from "../../2_Widget/InputFiled";
import useFindPw from "../../3_Entities/Account/useFindPw";
import logo from "../../4_Shared/assets/logo.svg";

import formatPhoneNumber from "../../4_Shared/util/formatPhoneNumber";
const FindPwPage = () => {
  const navigate = useNavigate();

  // react-hook-form 사용 설정
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue, // setValue로 전화번호 포맷팅된 값을 업데이트
  } = useForm();

  const [findPw] = useFindPw();

  return (
    <>
      <STYLE.PageContainer>
        <STYLE.Logo src={logo} alt="NEXT Logo" />
        <STYLE.InputContainer onSubmit={handleSubmit(findPw)}>
          {/* 아이디 유효성 검사 */}
          <InputFieldComponent
            label="아이디"
            type="text"
            placeholder="아이디를 입력하세요"
            register={register("id", {
              required: "아이디를 입력하세요.",
              pattern: {
                value: regexPatterns.id,
                message: "유효한 이메일 형식이어야 합니다.",
              },
            })}
            error={errors.id}
          />

          {/* 전화번호 유효성 검사 */}
          <InputFieldComponent
            label="전화번호 (010-1234-5678)"
            type="text"
            placeholder="전화번호를 입력하세요"
            register={register("phone", {
              required: "전화번호를 입력하세요.",
              pattern: {
                value: regexPatterns.phone,
                message:
                  "올바른 전화번호 형식이어야 합니다. (예: 010-XXXX-XXXX)",
              },
            })}
            onInputChange={(e) => {
              formatPhoneNumber(e, setValue);
            }}
            error={errors.phone}
          />

          {/* 회사명 유효성 검사 */}
          <InputFieldComponent
            label="회사"
            type="text"
            placeholder="회사명을 입력하세요"
            register={register("company", {
              required: "회사를 입력하세요.",
              pattern: {
                value: regexPatterns.company,
                message:
                  "1자 이상 50자 이하의 한글 또는 영문만 입력 가능합니다.",
              },
            })}
            error={errors.company}
          />
        </STYLE.InputContainer>

        <STYLE.ButtonContainer>
          <STYLE.SubmitButton onClick={handleSubmit(findPw)}>
            비밀번호 찾기
          </STYLE.SubmitButton>
          <STYLE.SubmitButton
            onClick={() => {
              navigate("/login");
            }}>
            뒤로가기
          </STYLE.SubmitButton>
        </STYLE.ButtonContainer>
      </STYLE.PageContainer>
    </>
  );
};

export default FindPwPage;
