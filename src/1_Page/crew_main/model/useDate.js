import { useEffect } from "react";
import useBusScheduleData from "../../../entities/crew/useBusScheduleData";
import useDateAtom from "../../../shared/recoil/useDateAtom";

const useDate = () => {
  const today = new Date();

  // 날짜 형식: YYYY-MM-DD
  const formattedDate = today.toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    weekday: "short",
  });

  // 날짜 형식: YYYY-MM-DD (간단한 형태)
  const formattedDateShort = `${today.getFullYear()}-${String(
    today.getMonth() + 1
  ).padStart(2, "0")}-${String(today.getDate()).padStart(2, "0")}`;

  // 시간 형식: HH:mm:ss
  const formattedTime = `${String(today.getHours()).padStart(2, "0")}:${String(
    today.getMinutes()
  ).padStart(2, "0")}:${String(today.getSeconds()).padStart(2, "0")}`;

  const [date, setDateTypeEvent] = useDateAtom();

  // 날짜를 한번만 설정하도록 useEffect로 감쌈
  useEffect(() => {
    const formatDate = `${today.getFullYear()}-${String(
      today.getMonth() + 1
    ).padStart(2, "0")}-${String(today.getDate()).padStart(2, "0")}`;
    setDateTypeEvent(formatDate);
  }, [setDateTypeEvent]);

  return [formattedDate, formattedDateShort, formattedTime];
};

export default useDate;
