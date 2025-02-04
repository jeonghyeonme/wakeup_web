import styled from "styled-components";

const STYLE = {
  CircularWrapper: styled.div`
    position: relative;
    width: 300px;
    height: 300px;
  `,
  CircularBackground: styled.div`
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: 15px solid #81c784; /* 외부 원형 테두리 */
    border-color: ${($wakeup) => ($wakeup ? "#81c784" : "#FEC3C3")};
    background: transparent; /* 가운데 빈 부분 */
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  CircularText: styled.div`
    position: absolute;
    font-size: 30px;
    font-weight: bold;
    color: #333;
    text-align: center;
    p {
      margin: 0;
    }
  `,
};
export default STYLE;
