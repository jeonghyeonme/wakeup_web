import styled from "styled-components";

export const STYLE = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    padding: 20px;
    background: linear-gradient(135deg, #fdfbfb 0%, #ebedee 100%);
    font-family: "Pretendard", sans-serif;
  `,

  Logo: styled.img`
    width: 100px;
    margin-bottom: 30px;
    @media (min-width: 768px) {
      width: 120px;
      margin-bottom: 40px;
    }
  `,

  Form: styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 100%;
    max-width: 360px;
    padding: 25px;
    border-radius: 20px;
    background: #fff;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
    box-sizing: border-box;

    @media (min-width: 768px) {
      padding: 30px;
      max-width: 400px;
    }
  `,

  InputWrapper: styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
  `,

  InputLabel: styled.div`
    display: flex;
    justify-content: flex-end;
    font-size: 13px;
    color: #666;
    margin-bottom: 5px;

    @media (min-width: 768px) {
      font-size: 14px;
    }
  `,

  InputField: styled.input`
    width: 100%;
    padding: 14px;
    font-size: 15px;
    border: 1px solid #ddd;
    border-radius: 10px;
    background: #f8f8f8;
    outline: none;
    transition: all 0.3s ease-in-out;
    box-sizing: border-box;

    &:focus {
      border-color: #3498db;
      background: #fff;
      box-shadow: 0px 0px 5px rgba(52, 152, 219, 0.3);
    }

    @media (min-width: 768px) {
      font-size: 16px;
    }
  `,

  LinkText: styled.span`
    cursor: pointer;
    color: #3498db;
    font-weight: 500;
    font-size: 14px;
    text-align: right;

    &:hover {
      text-decoration: underline;
    }

    @media (min-width: 768px) {
      font-size: 15px;
    }
  `,

  SubmitButton: styled.button`
    width: 100%;
    padding: 14px;
    font-size: 16px;
    font-weight: bold;
    color: #fff;
    background: linear-gradient(135deg, #3498db, #6dd5fa);
    border: none;
    border-radius: 12px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    box-sizing: border-box;

    &:hover {
      background: linear-gradient(135deg, #2980b9, #3498db);
      transform: translateY(-2px);
    }

    @media (min-width: 768px) {
      padding: 15px;
      font-size: 18px;
    }
  `,

  AdditionalLinks: styled.div`
    display: flex;
    justify-content: end;
    gap: 10px;
    font-size: 13px;
    margin-top: 15px;
    color: #555;

    @media (min-width: 768px) {
      font-size: 14px;
    }
  `,

  Divider: styled.div`
    width: 100%;
    height: 1px;
    background: #ddd;
    margin: 20px 0;
  `,

  SocialLogin: styled.div`
    display: flex;
    justify-content: center;
    gap: 15px;
  `,

  SocialButton: styled.button`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: none;
    background: ${({ bg }) => bg || "#ddd"};
    color: #fff;
    font-size: 22px;
    cursor: pointer;
    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease-in-out;

    &:hover {
      transform: scale(1.1);
      box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
    }
  `,
};
