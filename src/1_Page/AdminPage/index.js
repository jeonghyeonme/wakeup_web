import STYLE from "./style";
import { useRef, useState } from "react";

import useGetBusDriverDate from "./model/useGetBusDriverDate";
import useManageDriverDate from "./model/useManageDriverDate";
import useDate from "./model/useDate";
import useGetUserMyInfo from "./model/useGetUserMyInfo";

import UserBox from "./ui/UserBox";
import ModalCalander from "./ui/ModalCalander";
import NonSchedule from "../../2_Widget/NonSchedule";

const AdminPage = () => {
  const dateInputRef = useRef(null); // DateInput 요소에 접근할 ref 생성

  const { userInfo } = useGetUserMyInfo();
  const [isModalCalander, setIsModalCalander] = useState(false);

  const [date, handleDateChange] = useDate(dateInputRef);
  const { busDriverDateData } = useGetBusDriverDate(date);
  const { displayDriverDateData } = useManageDriverDate(
    busDriverDateData,
    date
  );

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
      {displayDriverDateData.length === 0 ? (
        <STYLE.ScheduleContainer>
          <NonSchedule />
        </STYLE.ScheduleContainer>
      ) : (
        <STYLE.UserContainer>
          {displayDriverDateData.map((busUser) => (
            <UserBox
              driver={busUser.driver}
              wakeup={busUser.wakeup}
              time={busUser.time}
              date={busUser.date}
            />
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
