import styled from "styled-components";

export const CardContainer = styled.div`
  width: 100%;
  height: 150px;
  background-color: #f0fff0; /* 연한 녹색 배경 */
  border-radius: 10px;
  padding: 15px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  font-family: Arial, sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 10px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;
  font-weight: bold;
  color: #333;
`;

export const TimeInfo = styled.div`
  display: flex;
  justify-content: start;
  font-size: 14px;
  color: #333;
  span {
    margin-right: 10px;
    font-weight: 600;
  }
`;

export const TimeTag = styled.p`
  display: flex;
  margin-right: 15px;
`;

export const DurationBadge = styled.div`
  display: flex;
  width: 80px;
  align-items: center;
  background-color: #fff;
  border: 1px solid #dcdcdc;
  border-radius: 20px;
  padding: 5px 10px;
  font-size: 12px;
  color: #333;
  gap: 5px;
`;

export const ClockIcon = styled.span`
  font-size: 14px;
  color: #4caf50;
  display: flex;
  align-items: center;
`;
