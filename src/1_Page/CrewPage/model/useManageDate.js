import { useMemo } from "react";

const useManageDate = () => {
  const currentDate = new Date();

  // 한국어 포맷의 현재 날짜 (YYYY-MM-DD 형식, 요일 포함)
  const koreanFormattedDate = useMemo(() => {
    return currentDate.toLocaleDateString("ko-KR", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      weekday: "short",
    });
  }, []);

  // 현재 시간 (HH:mm:ss)
  const currentFormattedTime = useMemo(() => {
    return currentDate.toTimeString().split(" ")[0]; // '14:30:45'
  }, []);

  return [currentDate, koreanFormattedDate, currentFormattedTime];
};

export default useManageDate;
