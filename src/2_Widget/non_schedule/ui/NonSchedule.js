import React from "react";
import { WidgetContainer, MessageText } from "./style";

const NonScheduleWidget = () => {
  return (
    <WidgetContainer>
      <MessageText>일정이 없습니다</MessageText>
    </WidgetContainer>
  );
};

export default NonScheduleWidget;
