import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { STYLE } from "./style";
import InputPlaceHorder from "../../2_Widget/InputPlaceHorder";
import logo from "../../4_Shared/assets/logo.svg";
import useLogin from "../../3_Entities/Account/useLogin";
import regexPatterns from "../../4_Shared/util/regexPatterns"; // 정규식 import

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const [loginEvent] = useLogin();

  const onSubmit = async (data) => {
    const { id, password } = data;
    console.log(id, password);
    await loginEvent(id, password);
  };

  return (
    <STYLE.Container>
      <STYLE.Logo src={logo} alt="NEXT Logo" />
      <STYLE.Form>
        {/* 아이디 유효성 검사 (이메일 형식) */}
        <InputPlaceHorder
          placeholder="아이디"
          type="text"
          name="id"
          register={register("id", {
            required: "아이디를 입력하세요.",
            pattern: {
              value: regexPatterns.id,
              message: "유효한 이메일 형식이어야 합니다.",
            },
          })}
        />
        <STYLE.ErrorText>{errors.id && errors.id.message}</STYLE.ErrorText>

        {/* 비밀번호 유효성 검사 */}
        <InputPlaceHorder
          placeholder="비밀번호"
          type="password"
          name="password"
          register={register("password", {
            required: "비밀번호를 입력하세요.",
            minLength: {
              value: 8,
              message: "비밀번호는 최소 8자 이상이어야 합니다.",
            },
            pattern: {
              value: regexPatterns.password,
              message: "비밀번호는 문자와 숫자를 포함해야 합니다.",
            },
          })}
        />

        <STYLE.ErrorText>
          {errors.password && errors.password.message}
        </STYLE.ErrorText>

        <STYLE.SubmitButton onClick={handleSubmit(onSubmit)}>
          로그인
        </STYLE.SubmitButton>

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
  );
};

export default LoginPage;
