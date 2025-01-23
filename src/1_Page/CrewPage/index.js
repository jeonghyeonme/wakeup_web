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
import useManageDate from "./model/useManageDate";
import useManageTime from "./model/useManageTime";
import useGetBusScheduleData from "./model/useGetBusScheduleData";

import putScheduleAlert from "../../3_Entities/crew/putScheduleAlert";
import useGetUserMyInfo from "../AdminPage/model/useGetUserMyInfo";

const CrewPage = () => {
  const {
    formattedDateKorea,
    formattedDateShort,
    presentFormattedTime,
    presentFormattedTimeShort,
  } = useManageDate();

  const { userInfo } = useGetUserMyInfo();
  const { busScheduleData } = useGetBusScheduleData(
    formattedDateShort,
    userInfo.idx,
    presentFormattedTimeShort
  );

  const { formattedTime } = useManageTime(
    busScheduleData?.start_time,
    presentFormattedTime
  );

  const [check, setCheck] = useState(false);

  const handleClickAttendace = async () => {
    const result = await putScheduleAlert();
    if (result) {
      setCheck(true);
    }
  };

  return (
    <TimerContainer>
      <TextContainer>
        <DateText>기사 : {busScheduleData?.name}</DateText>
        <DateText>{formattedDateKorea}</DateText>
        <TimeText>
          배차 시간 :
          {busScheduleData ? busScheduleData.start_time : "배차가 없습니다"}
        </TimeText>
        <TimeText>{busScheduleData?.title}</TimeText>
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
              <>
                <p>남은 시간</p>
                <p>{formattedTime}</p>
              </>
            )}
          </CircularText>
        </CircularBackground>
      </CircularWrapper>
    </TimerContainer>
  );
};

export default CrewPage;
