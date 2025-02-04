import STYLE from "./style";
import { useRef, useState } from "react";
import useManageDriverDate from "./model/useManageDriverDate";
import useDate from "./model/useDate";

import UserBox from "./ui/UserBox";
import ModalCalander from "../../2_Widget/ModalCalander";
import NonSchedule from "./ui/NonSchedule";
import useGetBusDriverDateData from "../../3_Entities/Admin/useGetBusDriverDateData";

const AdminPage = () => {
  const dateInputRef = useRef(null); // DateInput 요소에 접근할 ref 생성

  const [isModalCalander, setIsModalCalander] = useState(false);

  const [date, handleDateChange] = useDate(dateInputRef);
  const [busDriverDateData] = useGetBusDriverDateData(date);
  const [displayTimeEnoughDriverDateData, displayTimeOverDriverDateData] =
    useManageDriverDate(busDriverDateData);

  return (
    <>
      <STYLE.HeaderTag>
        <STYLE.DateText
          onClick={() => {
            setIsModalCalander(true);
          }}>
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
          onClose={() => {
            setIsModalCalander(false);
          }}
        />
      )}
    </>
  );
};

export default AdminPage;
