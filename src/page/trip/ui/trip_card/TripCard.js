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

const TripCard = ({ title, start, end, duration }) => {
  return (
    <CardContainer>
      <Header>
        {title}
        <span>⋮</span>
      </Header>
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
