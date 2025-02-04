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
    pointer-events: auto; /* 포커스를 받을 수 있도록 설정 */
  `,
  ScheduleContainer: styled.div`
    width: 100%;
    height: 80vh;
    overflow-y: scroll;
  `,
  UserContainer: styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    min-height: 90vh; /* 변경 */
    margin-top: 10vh;
    justify-content: start;
    align-items: center;
  `,
};
export default STYLE;
