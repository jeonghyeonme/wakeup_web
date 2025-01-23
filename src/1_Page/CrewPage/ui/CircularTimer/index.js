import STYLE from "./style";
import useManageTime from "./model/useManageTime";
import putScheduleAlert from "../../../../3_Entities/Crew/putScheduleAlert";

import { useEffect, useState } from "react";

const CircularTimer = (props) => {
  const { busScheduleData, presentFormattedTime } = props;

  const { formattedTime } = useManageTime(
    busScheduleData?.start_time,
    presentFormattedTime
  );
  useEffect(() => {
    console.log(formattedTime);
  }, [formattedTime]);

  const [check, setCheck] = useState(false);

  const handleClickAttendace = async () => {
    if (!busScheduleData) return;
    const result = await putScheduleAlert();
    if (result) {
      setCheck(true);
    }
  };

  return (
    <STYLE.CircularWrapper onClick={handleClickAttendace}>
      <STYLE.CircularBackground attendanc={busScheduleData?.attendanc || check}>
        <STYLE.CircularText>
          {busScheduleData?.attendanc || check ? (
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
