import React, { useEffect, useState } from "react";
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
  }, [formattedDateShort, name, formattedTime]);

  const timer = useTime(busScheduleData?.time, formattedTime);
  const [check, setCheck] = useState(false);

  return (
    <TimerContainer>
      <TextContainer>
        <DateText>기사 : {name}</DateText>
        <DateText>{formattedDate}</DateText>
        <TimeText>
          배차 시간 :{" "}
          {busScheduleData ? busScheduleData.time : "배차가 없습니다"}
        </TimeText>
      </TextContainer>
      <CircularWrapper
        onClick={() => {
          setCheck(true);
        }}>
        <CircularBackground attendanc={busScheduleData?.attendanc || check}>
          <CircularText>
            {busScheduleData?.attendanc || check ? (
              <p>출석 완료</p>
            ) : (
              <p>남은 시간</p>
            )}
            {!busScheduleData?.attendanc && timer}
          </CircularText>
        </CircularBackground>
      </CircularWrapper>
    </TimerContainer>
  );
};

export default CrewPage;
