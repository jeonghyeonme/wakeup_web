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
import { getCookie } from "../../../../shared/cookie/cookie";
import useClickAlert from "../../../../entities/crew/useClickAlert";

const CrewPage = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const cookieData = getCookie("user_data");
    setData(cookieData); // 상태로 설정
  }, []);

  const [formattedDate, formattedDateShort, formattedTime] = useDate();
  const [busScheduleData, error, fetchData] = useBusScheduleData();

  useEffect(() => {
    if (data !== null) {
      fetchData(formattedDateShort, data.user_idx, formattedTime);
    }
  }, [formattedDateShort, data, formattedTime]);

  const timer = useTime(busScheduleData?.time, formattedTime);
  const [check, setCheck] = useState(false);

  const [clickEnum, fetchClickData] = useClickAlert();

  useEffect(() => {
    if (check && busScheduleData) {
      fetchClickData(busScheduleData);
    }
  }, [check]);

  useEffect(() => {}, [busScheduleData]);

  return (
    <TimerContainer>
      <TextContainer>
        <DateText>기사 : {data?.name}</DateText>
        <DateText>{formattedDate}</DateText>
        <TimeText>
          배차 시간 :{" "}
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
                <p>{timer}</p>
              </>
            )}
          </CircularText>
        </CircularBackground>
      </CircularWrapper>
    </TimerContainer>
  );
};

export default CrewPage;
