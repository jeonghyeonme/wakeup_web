import { useMemo } from "react";

const useManageDate = () => {
  const today = new Date();

  // YYYY-MM-DD (간단한 형태)
  const formattedDateShort = useMemo(() => {
    return today.toISOString().split("T")[0]; // '2024-01-23'
  }, []);

  // YYYY-MM-DD (한국어 형식)
  const formattedDateKorea = useMemo(() => {
    return today.toLocaleDateString("ko-KR", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      weekday: "short",
    });
  }, []);

  // HH:mm:ss (시간 형식)
  const presentFormattedTime = useMemo(() => {
    return today.toTimeString().split(" ")[0]; // '14:30:45'
  }, []);
  const presentFormattedTimeShort = useMemo(() => {
    return today.toTimeString().split(" ")[0].slice(0, 5); // '14:30'
  }, []);
  return {
    formattedDateKorea,
    formattedDateShort,
    presentFormattedTime,
    presentFormattedTimeShort,
  };
};

export default useManageDate;
