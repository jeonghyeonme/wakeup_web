import { useRef, useEffect } from "react";

const useScroll = (currentYear, currentMonth) => {
  const yearListRef = useRef(null);
  const monthListRef = useRef(null);

  useEffect(() => {
    // 연도 리스트의 스크롤 위치 설정
    const selectedYearElement = yearListRef.current.querySelector(
      `[data-year="${currentYear}"]`
    );
    if (selectedYearElement) {
      selectedYearElement.scrollIntoView({
        block: "center",
        behavior: "smooth",
      });
    }

    // 월 리스트의 스크롤 위치 설정
    const selectedMonthElement = monthListRef.current.querySelector(
      `[data-month="${currentMonth}"]`
    );
    if (selectedMonthElement) {
      selectedMonthElement.scrollIntoView({
        block: "center",
        behavior: "smooth",
      });
    }
  }, [currentMonth, currentYear]);
  return [yearListRef, monthListRef];
};

export default useScroll;
