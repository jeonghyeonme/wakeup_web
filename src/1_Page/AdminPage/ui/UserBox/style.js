import styled from "styled-components";

const STYLE = {
  Container: styled.div`
    background: ${({ wakeup }) =>
      wakeup
        ? "linear-gradient(135deg, #e8f8ec, #d3f1d4)"
        : "linear-gradient(135deg, #ffc9c9, #fdb2b2)"};
    padding: 15px 20px;
    width: 90%;
    max-width: 400px;
    height: 90px;

    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;

    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      transform: translateY(-4px);
      box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
    }

    &:active {
      transform: translateY(0);
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }
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
    width: 100%;
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
