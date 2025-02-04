import STYLE from "./style";
import { useNavigate } from "react-router-dom";
import { format } from "date-fns";
import { useEffect } from "react";
import useManageDriverDate from "./model/useManageDriverDate";
import useDate from "./model/useDate";
import UserBox from "./ui/UserBox";
import NonSchedule from "./ui/NonSchedule";

import ModalCalander from "../../2_Widget/ModalCalander";
import useGetTodaySchedule from "../../3_Entities/Admin/useGetTodaySchedule";
import useModalHandler from "../../4_Shared/model/useModalHandler";
import useGetMyInfo from "../../3_Entities/Account/useGetMyInfo";

const AdminPage = () => {
  const [myInfo] = useGetMyInfo();
  useEffect(() => {
    if (myInfo) if (myInfo?.type !== "admin") window.location.href = "/crew";
  }, [myInfo]);

  const [isModalCalander, modalCalanderToggle] = useModalHandler();
  const [dateInputRef, date, handleDateChange] = useDate();
  const [busDriverDateData] = useGetTodaySchedule(date);
  const [displayTimeEnoughDriverDateData, displayTimeOverDriverDateData] =
    useManageDriverDate(busDriverDateData);

  return (
    <>
      <STYLE.Container>
        <STYLE.HeaderTag>
          <STYLE.DateText onClick={modalCalanderToggle}>
            {format(date, "yyyy-MM-dd")}
          </STYLE.DateText>
          <STYLE.DateInput
            ref={dateInputRef}
            value={format(date, "yyyy-MM-dd")}
            onChange={handleDateChange}
          />
        </STYLE.HeaderTag>
        {displayTimeEnoughDriverDateData.length +
          displayTimeOverDriverDateData.length ===
        0 ? (
          <STYLE.ScheduleContainer>
            <NonSchedule />
          </STYLE.ScheduleContainer>
        ) : (
          <STYLE.UserContainer>
            {displayTimeOverDriverDateData.map((schedule) => (
              <UserBox schedule={schedule} isEnoughTime={false} />
            ))}
            {displayTimeEnoughDriverDateData.map((schedule) => (
              <UserBox schedule={schedule} isEnoughTime={true} />
            ))}
          </STYLE.UserContainer>
        )}
      </STYLE.Container>

      {isModalCalander && (
        <ModalCalander
          handleDateChange={handleDateChange}
          onClose={modalCalanderToggle}
        />
      )}
    </>
  );
};

export default AdminPage;
