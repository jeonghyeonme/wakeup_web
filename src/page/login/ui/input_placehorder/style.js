import styled from "styled-components";

export const PlaceholderContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const PlaceholderText = styled.p`
  position: absolute;
  width: 80%;
  height: 30px;
  padding: 10px;
  pointer-events: none;
  transition: font-size 0.3s;
  font-size: ${(props) => (props.active ? "8px" : "15px")};
  color: #333;
`;

export const PlaceholderInput = styled.input`
  width: 80%;
  height: 50px;
  border: none;
  outline: none;
  border-radius: 5px;
  padding: 10px;
  line-height: 30px;
  background-color: #f0f0f0;
  transition: font-size 0.3s;
  font-size: ${(props) => (props.active ? "13px" : "16px")};
`;
