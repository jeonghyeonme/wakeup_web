import styled from "styled-components";

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 10px 0;
  background-color: #fff;
  border-top: 1px solid #ddd;
  height: 10vh;
`;

export const NavItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  color: ${(props) =>
    props.active
      ? "#7ed321"
      : "#888"}; /* 선택된 항목은 녹색, 비활성화는 회색 */

  svg {
    fill: ${(props) => (props.active ? "#7ed321" : "#888")};
    width: 24px;
    height: 24px;
  }

  span {
    font-size: 12px;
    margin-top: 5px;
    color: ${(props) => (props.active ? "#7ed321" : "#888")};
  }
`;
