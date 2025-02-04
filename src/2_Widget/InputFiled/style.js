import styled from "styled-components";
const STYLE = {
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

  InputContainer: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
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
  ErrorMessageContainer: styled.div`
    display: flex;
    width: 100%;
    justify-content: end;
  `,
  ErrorMessage: styled.p`
    height: 10px;
    font-size: 10px;
    color: red;
    margin: 3px;
  `,
};
export default STYLE;
