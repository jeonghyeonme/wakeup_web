import styled from "styled-components";

export const HeaderTag = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  padding: 10px;
  height: 10vh;
`;

export const DateText = styled.span`
  font-size: 22px;
  font-weight: 700;
  color: #333;
  cursor: pointer;
  width: 90%;
`;

export const DateInput = styled.input`
  position: absolute;
  width: 1px;
  height: 1px;
  opacity: 0;
  pointer-events: auto; /* 포커스를 받을 수 있도록 설정 */
`;
