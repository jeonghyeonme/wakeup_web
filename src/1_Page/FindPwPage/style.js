import styled from "styled-components";
const STYLE = {
  PageContainer: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    height: 100vh;
    background-color: #fff;
    font-family: Arial, sans-serif;
  `,

  Logo: styled.img`
    width: 100px;
    height: auto;
    margin-bottom: 40px;
  `,

  InputContainer: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  `,

  InputWrapper: styled.div`
    width: 80%;
    max-width: 400px;
    margin-bottom: 20px;
  `,

  InputLabel: styled.div`
    font-size: 14px;
    color: #888;
    margin-bottom: 5px;
  `,

  InputField: styled.input`
    width: 100%;
    padding: 10px;
    font-size: 16px;
    border: none;
    border-bottom: 1px solid #ccc;
    outline: none;
    background: transparent;

    &:focus {
      border-bottom: 1px solid #000;
    }
  `,

  SubmitButton: styled.button`
    width: 200px;
    padding: 10px;
    margin-top: 20px;
    font-size: 16px;
    font-weight: bold;
    color: #333;
    background-color: #f8f8f8;
    border: none;
    border-radius: 5px;
    text-align: center;
    cursor: pointer;

    &:hover {
      background-color: #e0e0e0;
    }
  `,

  ButtonContainer: styled.div`
    display: flex;
    flex-direction: column;
  `,
};

export default STYLE;
