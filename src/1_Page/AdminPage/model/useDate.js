import { useMemo, useRef, useState } from "react";

const useDate = () => {
  // 한국 시간 기준으로 오늘 날짜 설정
  const today = useMemo(() => new Date(), []); // Date 객체를 그대로 저장

  const dateInputRef = useRef(null);
  const [date, setDate] = useState(today);

  // 날짜 객체를 받아서 상태 업데이트
  const handleDateChange = (newDate) => {
    if (!(newDate instanceof Date) || isNaN(newDate.getTime())) {
      console.error("유효하지 않은 날짜 객체입니다:", newDate);
      return;
    }
    setDate(newDate); // Date 객체만 상태로 설정
  };

  return [dateInputRef, date, handleDateChange]; // formattedDate를 사용하여 날짜 표시
};

export default useDate;
