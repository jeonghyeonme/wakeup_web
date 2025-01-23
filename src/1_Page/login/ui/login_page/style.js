import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  font-family: Arial, sans-serif;
  background-color: #fff;
`;

export const Logo = styled.img`
  width: 200px;
  height: auto;
  margin-bottom: 50px;
`;

export const InputContainer = styled.div`
  width: 80%;
  max-width: 400px;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const InputLabel = styled.div`
  display: flex;
  width: 80%;
  justify-content: end;
  font-size: 14px;
  color: #888;
  margin-bottom: 5px;
`;

export const InputField = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-sizing: border-box;
`;

export const LinkText = styled.span`
  font-size: 14px;
  color: #007bff;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

export const SubmitButton = styled.button`
  width: 150px;
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
