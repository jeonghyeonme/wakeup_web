import styled from "styled-components";

export const Container = styled.div`
  background-color: ${(props) => (props.wakeup ? "#eff7eb" : "#FEC3C3")};
  padding: 10px 15px;
  border-radius: 8px;
  display: inline-flex;
  align-items: center;
  width: 360px;
  height: 80px;
  margin-bottom: 30px;
  cursor: pointer;
`;

export const Text = styled.span`
  font-size: 16px;
  font-weight: bold;
  color: #333; /* 텍스트 색상 */
  margin-right: 8px;
`;

export const Time = styled.span`
  font-size: 14px;
  color: #666; /* 회색 시간 텍스트 */
`;
