import { useMemo, useState } from "react";

const useManageDate = () => {
  const [dateTrigger, setDateTrigger] = useState(false);

  const currentDate = useMemo(() => new Date(), [dateTrigger]);

  const koreanFormattedDate = useMemo(() => {
    return currentDate.toLocaleDateString("ko-KR", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      weekday: "short",
    });
  }, [currentDate]);

  // 토글 방식의 트리거 업데이트 함수
  const toggleDateTrigger = () => setDateTrigger((prev) => !prev);

  return [currentDate, koreanFormattedDate, toggleDateTrigger];
};

export default useManageDate;
