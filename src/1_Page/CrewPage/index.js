import React from "react";
import STYLE from "./style";
import useManageDate from "./model/useManageDate";
import useGetBusScheduleData from "../../3_Entities/Crew/useGetBusScheduleData";
import useGetMyInfo from "../../3_Entities/Account/useGetMyInfo";
import CircularTimer from "./ui/CircularTimer";

const CrewPage = () => {
  const [currentDate, formattedDateKorea, presentFormattedTime] =
    useManageDate();
  const [myInfo] = useGetMyInfo();
  const [busScheduleData] = useGetBusScheduleData(currentDate, myInfo?.idx);

  return (
    <STYLE.TimerContainer>
      <STYLE.TextContainer>
        <STYLE.DateText>기사 : {myInfo?.name}</STYLE.DateText>
        <STYLE.DateText>{formattedDateKorea}</STYLE.DateText>
        <STYLE.TimeText>
          배차 시간 :
          {busScheduleData ? busScheduleData.start_time : "배차가 없습니다"}
        </STYLE.TimeText>
        <STYLE.TimeText>{busScheduleData?.title}</STYLE.TimeText>
      </STYLE.TextContainer>
      <CircularTimer
        presentFormattedTime={presentFormattedTime}
        busScheduleData={busScheduleData}
      />
    </STYLE.TimerContainer>
  );
};

export default CrewPage;
