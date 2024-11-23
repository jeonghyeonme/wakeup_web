import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  font-family: Arial, sans-serif;
  background-color: #f9f9f9;
  min-height: 100%;
`;

export const Header = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: #333;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const CardList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
  max-width: 400px;
  max-height: 650px;
  overflow-y: auto;
`;
