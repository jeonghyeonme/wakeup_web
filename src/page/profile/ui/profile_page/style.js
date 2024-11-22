import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  height: 100%;
  background-color: #fff;
  font-family: Arial, sans-serif;
`;

export const Logo = styled.img`
  width: 100px;
  height: auto;
  margin-bottom: 40px;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const InputWrapper = styled.div`
  width: 80%;
  max-width: 400px;
  height: 50px;
  margin-bottom: 20px;
`;

export const InputLabel = styled.div`
  font-size: 14px;
  color: #888;
  margin-bottom: 5px;
`;

export const InputField = styled.input`
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
`;

export const SubmitButton = styled.button`
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
`;
