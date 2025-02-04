import React from "react";
import STYLE from "./style";

const NonScheduleWidget = () => {
  return (
    <STYLE.WidgetContainer>
      <STYLE.MessageText>일정이 없습니다</STYLE.MessageText>
    </STYLE.WidgetContainer>
  );
};

export default NonScheduleWidget;
