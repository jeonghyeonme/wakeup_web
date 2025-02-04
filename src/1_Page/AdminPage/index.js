import STYLE from "./style";

import useManageDriverDate from "./model/useManageDriverDate";
import useDate from "./model/useDate";
import UserBox from "./ui/UserBox";
import NonSchedule from "./ui/NonSchedule";

import ModalCalander from "../../2_Widget/ModalCalander";
import useGetBusDriverDateData from "../../3_Entities/Admin/useGetMyTodaySchedule";
import useModalHandler from "../../4_Shared/model/useModalHandler";

const AdminPage = () => {
  const [isModalCalander, modalCalanderToggle] = useModalHandler();
  const [dateInputRef, date, handleDateChange] = useDate();
  const [busDriverDateData] = useGetBusDriverDateData(date);
  const [displayTimeEnoughDriverDateData, displayTimeOverDriverDateData] =
    useManageDriverDate(busDriverDateData);

  return (
    <>
      <STYLE.HeaderTag>
        <STYLE.DateText onClick={modalCalanderToggle}>
          {new Date(date).toLocaleDateString("ko-KR", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            weekday: "short",
          })}
        </STYLE.DateText>
        <STYLE.DateInput
          ref={dateInputRef}
          value={date}
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
