import styled from "styled-components";

const STYLE = {
  DateText: styled.span`
    font-size: 22px;
    font-weight: 700;
    width: auto;
  `,
  TextIcon: styled.p`
    font-size: 12px;
    color: #6ad87b;
    margin: 5px;
  `,

  HeaderTag: styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 10vh;
  `,
  DateInput: styled.input`
    position: absolute;
    width: 1px;
    height: 1px;
    opacity: 0;
    pointer-events: auto;
  `,
};
export default STYLE;
