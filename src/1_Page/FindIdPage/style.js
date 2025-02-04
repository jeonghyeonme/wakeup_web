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
