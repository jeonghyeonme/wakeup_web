import styled from "styled-components";

const STYLE = {
  Contianer: styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.5); /* 반투명 배경 */
  `,
  Text: styled.p`
    font-size: large;
    font-weight: 600;
  `,
  Wrapper: styled.div`
    width: 300px;
    padding: 20px;
    border: 1px solid #d3f1c7;
    background-color: #ffffff;
    border-radius: 3px;
    box-shadow: #d3f1c7 1px;
  `,
  Header: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 10px;
  `,
  SelectedDate: styled.div`
    font-size: xx-large;
    color: #7cba7d;
    font-weight: bold;
  `,
  MonthSelector: styled.div`
    display: flex;
    align-items: center;
    font-size: 16px;
    color: #333;
  `,
  Arrow: styled.span`
    cursor: pointer;
    margin: 0 10px;
    font-size: 18px;
    color: #7cba7d;
  `,
  CalendarGrid: styled.div`
    display: grid;
    height: 30vh;
    grid-template-columns: repeat(7, 1fr);
  `,
  DayHeader: styled.div`
    font-size: 14px;
    font-weight: bold;
    color: #666;
    text-align: center;
  `,
  Day: styled.div`
    padding: 10px;
    text-align: center;
    background-color: ${({ isSelected }) =>
      isSelected ? "#d3f1c7" : "transparent"};
    color: black;

    &:hover {
      background-color: #e8f9e1;
    }
  `,
  ButtonGroup: styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 15px;
  `,
  CancelButton: styled.button`
    padding: 8px 16px;
    background-color: #ffffff;
    border: 1px solid #7cba7d;
    color: #7cba7d;
    border-radius: 8px;
    cursor: pointer;

    &:hover {
      background-color: #e8f9e1;
    }
  `,
  ConfirmButton: styled.button`
    padding: 8px 16px;
    background-color: #7cba7d;
    color: #ffffff;
    border: none;
    border-radius: 8px;
    cursor: pointer;

    &:hover {
      background-color: #67a366;
    }
  `,
};

export default STYLE;
