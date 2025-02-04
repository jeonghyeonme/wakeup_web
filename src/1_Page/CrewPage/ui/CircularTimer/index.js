import STYLE from "./style";
import useManageTime from "./model/useManageTime";
import usePutAttendance from "../../../../3_Entities/Crew/usePutAttendance";
import { useState } from "react";

const CircularTimer = (props) => {
  const { busScheduleData, currentDate, toggleDateTrigger } = props;
  const [isWakeUp, setIsWakeUp] = useState(false);
  const [putAttendance] = usePutAttendance(busScheduleData?.idx, {
    onSuccess: toggleDateTrigger,
  });

  const [remainTime] = useManageTime(
    busScheduleData?.start_time,
    currentDate,
    isWakeUp
  );

  return (
    <STYLE.CircularWrapper
      onClick={() => {
        if (busScheduleData && !isWakeUp) {
          setIsWakeUp(true);
          putAttendance();
        }
      }}>
      <STYLE.CircularBackground $wakeup={busScheduleData?.wakeup || isWakeUp}>
        <STYLE.CircularText>
          {busScheduleData?.wakeup || isWakeUp ? (
            <p>출석 완료</p>
          ) : (
            <>
              <p>남은 시간</p>
              <p>{remainTime}</p>
            </>
          )}
        </STYLE.CircularText>
      </STYLE.CircularBackground>
    </STYLE.CircularWrapper>
  );
};
export default CircularTimer;
