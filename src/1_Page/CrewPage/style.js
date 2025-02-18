import styled from "styled-components";

const STYLE = {
  TimerContainer: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 90vh;
  `,
  RefreshBtn: styled.button`
    width: 40px;
    height: 40px;
    font-size: 40px;
    position: absolute;
    right: 0;
    top: 0;
  `,

  TextContainer: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 30vh;
  `,

  DateText: styled.p`
    font-size: 30px;
    font-weight: bold;
    margin: 0 0 20px;
  `,

  TimeText: styled.p`
    font-size: 22px;
    margin-bottom: 20px;
  `,
};

export default STYLE;
