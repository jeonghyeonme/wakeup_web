import styled from "styled-components";

const STYLE = {
  Container: styled.div`
    width: 100%;
    height: 90vh;
  `,
  HeaderTag: styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: end;
    padding: 10px;
    height: 10vh;
  `,

  DateText: styled.span`
    font-size: 22px;
    font-weight: 700;
    cursor: pointer;
    width: 90%;
  `,

  DateInput: styled.input`
    position: absolute;
    width: 1px;
    height: 1px;
    opacity: 0;
    pointer-events: auto;
  `,
  ScheduleContainer: styled.div`
    width: 100%;
    height: 80vh;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
  UserContainer: styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: start;
    align-items: center;
  `,
};
export default STYLE;
