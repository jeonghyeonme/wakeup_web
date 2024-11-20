import React, { useEffect } from "react";
import {
  TimerContainer,
  DateText,
  TimeText,
  CircularWrapper,
  CircularBackground,
  CircularText,
  TextContainer,
} from "./style";
import useDate from "../../model/useDate";
import useTime from "../../model/useTime";
import useBusScheduleData from "../../../../entities/crew/useBusScheduleData";

const CrewPage = () => {
  const name = "이지우";

  const [formattedDate, formattedDateShort, formattedTime] = useDate();
  const [busScheduleData, error, fetchData] = useBusScheduleData();

  // date나 name이 변경될 때만 fetchData 실행
  useEffect(() => {
    fetchData(formattedDateShort, name, formattedTime);
  }, [formattedDate, name, formattedTime]);

  useEffect(() => {
    console.log("버스데이터", busScheduleData);
  }, [busScheduleData]);

  const timer = useTime(busScheduleData?.time, formattedTime);

  useEffect(() => {
    console.log("시계", timer);
  }, [timer]);

  return (
    <TimerContainer>
      <TextContainer>
        <DateText>기사 : {name}</DateText>
        <DateText>{formattedDate}</DateText>
        <TimeText>배차 시간 : {busScheduleData?.time}</TimeText>
      </TextContainer>
      <CircularWrapper>
        <CircularBackground>
          <CircularText>
            {busScheduleData?.attendanc ? <p>출석 완료</p> : <p>남은 시간</p>}
            {timer}
          </CircularText>
        </CircularBackground>
      </CircularWrapper>
    </TimerContainer>
  );
};

export default CrewPage;
