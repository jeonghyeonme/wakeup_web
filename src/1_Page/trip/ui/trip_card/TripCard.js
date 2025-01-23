import React from "react";
import {
  CardContainer,
  Header,
  TimeInfo,
  DurationBadge,
  ClockIcon,
  TimeTag,
} from "./style";
import { FiClock } from "react-icons/fi";

const TripCard = ({ title, start, end, duration, date }) => {
  // 현재 시간 가져오기
  const now = new Date();

  // 시작 시간을 `Date` 객체로 변환
  const startTime = new Date(`${date}T${start}`);

  // 현재 시간과 비교하여 시간이 지났는지 여부 결정
  const isActive = now < startTime;

  return (
    <CardContainer isActive={isActive}>
      <Header>{title}</Header>
      <TimeInfo>
        <TimeTag>시작 {start}</TimeTag>
        <TimeTag>종료 {end}</TimeTag>
      </TimeInfo>
      <DurationBadge>
        <ClockIcon>
          <FiClock />
        </ClockIcon>
        {duration}
      </DurationBadge>
    </CardContainer>
  );
};

export default TripCard;
