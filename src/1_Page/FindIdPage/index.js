import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import STYLE from "./style";

import InputFieldComponent from "../../2_Widget/InputFiled";
import useFindId from "../../3_Entities/Account/useFindId";
import logo from "../../4_Shared/assets/logo.svg";
import regexPatterns from "../../4_Shared/util/regexPatterns"; // 정규식 import

const FindIdPage = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [findId] = useFindId();

  return (
    <>
      <STYLE.PageContainer>
        <STYLE.Logo src={logo} alt="NEXT Logo" />
        <STYLE.InputContainer onSubmit={handleSubmit(findId)}>
          {/* 이름 유효성 검사 */}
          <InputFieldComponent
            label="이름"
            type="text"
            placeholder="이름을 입력하세요"
            register={register("name", {
              required: "이름을 입력하세요.",
              pattern: {
                value: regexPatterns.name,
                message:
                  "2자 이상 20자 이하의 한글 또는 영문만 입력 가능합니다.",
              },
            })}
            error={errors.name}
          />

          {/* 전화번호 유효성 검사 */}
          <InputFieldComponent
            label="전화번호 (010-1234-1234)"
            type="text"
            placeholder="전화번호를 입력하세요"
            register={register("phone", {
              required: "전화번호를 입력하세요.",
              pattern: {
                value: regexPatterns.phone,
                message: "유효한 전화번호 형식(010-XXXX-XXXX)을 입력하세요.",
              },
            })}
            error={errors.phone}
          />

          {/* 회사명 유효성 검사 */}
          <InputFieldComponent
            label="회사"
            type="text"
            placeholder="회사를 입력하세요"
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
          <STYLE.SubmitButton type="submit" onClick={handleSubmit(findId)}>
            아이디 찾기
          </STYLE.SubmitButton>
          <STYLE.SubmitButton onClick={() => navigate("/login")}>
            뒤로가기
          </STYLE.SubmitButton>
        </STYLE.ButtonContainer>
      </STYLE.PageContainer>
    </>
  );
};

export default FindIdPage;
