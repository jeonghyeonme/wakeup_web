import styled from "styled-components";

const STYLE = {
  Container: styled.div`
    background-color: ${({ wakeup }) => (wakeup ? "#eff7eb" : "#FEC3C3")};
    padding: 10px 15px;
    width: 80%;
    height: 80px;

    border-radius: 8px;
    display: inline-flex;
    align-items: center;
    margin-bottom: 30px;
    cursor: pointer;
  `,
  Text: styled.span`
    font-size: 16px;
    font-weight: bold;
    color: #333;
    margin-right: 8px;
  `,
  Time: styled.span`
    font-size: 14px;
    color: #666;
  `,

  ModalContainer: styled.div`
    background: white;
    width: 90%;
    max-width: 400px;
    padding: 20px;
    border-radius: 15px 15px 0 0;
    text-align: center;
  `,

  DateText: styled.div`
    font-size: 14px;
    color: #7ed321;
    margin-bottom: 10px;
  `,

  PhoneText: styled.div`
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 10px;
  `,

  NameText: styled.div`
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 20px;
  `,

  FrameText: styled.div`
    font-size: 12px;
    color: #888;
    margin-bottom: 20px;
  `,

  Button: styled.button`
    width: 100%;
    padding: 10px;
    font-size: 16px;
    font-weight: bold;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-bottom: 10px;
    color: white;
    background-color: ${({ type }) =>
      type === "call" ? "#7ed321" : "#f08080"};
  `,
};
export default STYLE;
