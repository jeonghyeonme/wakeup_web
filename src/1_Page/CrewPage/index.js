import React, { useState } from "react";
import { TimerContainer, DateText, TimeText, TextContainer } from "./style";
import useManageDate from "./model/useManageDate";
import useGetBusScheduleData from "./model/useGetBusScheduleData";
import useGetUserMyInfo from "./model/useGetUserMyInfo";

import CircularTimer from "./ui/CircularTimer";

import ErrorModal from "../../2_Widget/ConfirmModal";

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
        <CircularTimer
          presentFormattedTime={presentFormattedTime}
          busScheduleData={busScheduleData}
        />
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
