import React from "react";
import STYLE from "./style";
import { FiClock } from "react-icons/fi";
import { format } from "date-fns";

const TripCard = (props) => {
  const {
    schedule: { title, start_time, end_time },
  } = props;

  return (
    <STYLE.CardContainer isActive={new Date() < start_time}>
      <STYLE.Header>{title}</STYLE.Header>
      <STYLE.TimeInfo>
        <STYLE.TimeTag>시작 {format(start_time, "hh:mm")}</STYLE.TimeTag>
        <STYLE.TimeTag>종료 {format(end_time, "hh:mm")}</STYLE.TimeTag>
      </STYLE.TimeInfo>
      <STYLE.DurationBadge>
        <STYLE.ClockIcon>
          <FiClock />
        </STYLE.ClockIcon>
        {format(new Date(end_time) - new Date(start_time), "hh:mm")}
      </STYLE.DurationBadge>
    </STYLE.CardContainer>
  );
};

export default TripCard;
