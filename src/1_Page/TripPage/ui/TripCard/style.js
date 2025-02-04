import styled from "styled-components";

const STYLE = {
  CardContainer: styled.div`
    width: 100%;
    max-width: 400px;
    height: 160px;
    background-color: ${(props) => (props.isActive ? "#e6ffe6" : "#f5f5f5")};
    border-radius: 12px;
    padding: 20px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 10px;
  `,

  Header: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 18px;
    font-weight: bold;
    color: #333;
  `,

  TimeInfo: styled.div`
    display: flex;
    justify-content: start;
    font-size: 14px;
    color: #666;
    span {
      margin-right: 10px;
      font-weight: 600;
    }
  `,

  TimeTag: styled.p`
    margin-right: 10px;
    font-size: 13px;
    color: #999;
  `,

  DurationBadge: styled.div`
    display: flex;
    align-items: center;
    width: fit-content;
    background-color: #ffffff;
    border: 1px solid #e0e0e0;
    border-radius: 20px;
    padding: 5px 12px;
    font-size: 13px;
    color: #333;
    gap: 5px;
  `,

  ClockIcon: styled.span`
    font-size: 14px;
    color: #4caf50;
    display: flex;
    align-items: center;
  `,
};

export default STYLE;
