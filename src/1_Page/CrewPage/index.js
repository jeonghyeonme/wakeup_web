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
import useGetUserMyInfo from "./model/useGetUserMyInfo";

import ErrorModal from "../../2_Widget/ConfirmModal";

import putScheduleAlert from "../../3_Entities/Crew/putScheduleAlert";

import useErrorModal from "../../4_Shared/model/useErrorModal";

const CrewPage = () => {
  const {
    formattedDateKorea,
    formattedDateShort,
    presentFormattedTime,
    presentFormattedTimeShort,
  } = useManageDate();

  const { errorMessage, isModalOpen, showErrorModal, errorModalBackPage } =
    useErrorModal();

  const { userInfo } = useGetUserMyInfo(showErrorModal);

  const { busScheduleData } = useGetBusScheduleData(
    formattedDateShort,
    userInfo?.idx,
    presentFormattedTimeShort
  );

  const { formattedTime } = useManageTime(
    busScheduleData?.start_time,
    presentFormattedTime
  );

  const [check, setCheck] = useState(false);

  const handleClickAttendace = async () => {
    if (!busScheduleData) return;
    const result = await putScheduleAlert();
    if (result) {
      setCheck(true);
    }
  };

  return (
    <>
      <TimerContainer>
        <TextContainer>
          <DateText>기사 : {userInfo?.name}</DateText>
          <DateText>{formattedDateKorea}</DateText>
          <TimeText>
            배차 시간 :
            {busScheduleData ? busScheduleData.start_time : "배차가 없습니다"}
          </TimeText>
          <TimeText>{busScheduleData?.title}</TimeText>
        </TextContainer>
        <CircularWrapper onClick={handleClickAttendace}>
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
      {isModalOpen && (
        <ErrorModal
          onClose={errorModalBackPage}
          message={errorMessage}
          type="one"
        />
      )}
    </>
  );
};

export default CrewPage;
