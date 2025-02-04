import STYLE from "./style";
import useManageTime from "./model/useManageTime";
import usePutAttendance from "../../../../3_Entities/Crew/usePutAttendance";

const CircularTimer = (props) => {
  const { busScheduleData, presentFormattedTime } = props;

  const [formattedTime] = useManageTime(
    busScheduleData?.start_time,
    presentFormattedTime
  );
  const [putAttendance] = usePutAttendance();

  return (
    <STYLE.CircularWrapper onClick={putAttendance}>
      <STYLE.CircularBackground attendanc={busScheduleData?.attendanc}>
        <STYLE.CircularText>
          {busScheduleData?.attendanc ? (
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
