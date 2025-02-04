import STYLE from "./style";
import useManageTime from "./model/useManageTime";
import usePutAttendance from "../../../../3_Entities/Crew/usePutAttendance";

const CircularTimer = (props) => {
  const { busScheduleData, currentDate, toggleDateTrigger } = props;
  const [putAttendance] = usePutAttendance(busScheduleData?.idx, {
    onSuccess: toggleDateTrigger,
  });
  const [formattedTime] = useManageTime(
    busScheduleData?.start_time,
    currentDate
  );

  return (
    <STYLE.CircularWrapper onClick={putAttendance}>
      <STYLE.CircularBackground $wakeup={busScheduleData?.wakeup}>
        <STYLE.CircularText>
          {busScheduleData?.wakeup ? (
            <p>출석 완료</p>
          ) : (
            <>
              <p>남은 시간</p>
              <p>{formattedTime}</p>
            </>
          )}
        </STYLE.CircularText>
      </STYLE.CircularBackground>
    </STYLE.CircularWrapper>
  );
};
export default CircularTimer;
