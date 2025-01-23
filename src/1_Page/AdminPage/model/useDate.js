import { useEffect, useState } from "react";

const useDate = (dateInputRef) => {
  const today = new Date().toISOString().split("T")[0]; // 현재 날짜 초기값 설정
  const [date, setDate] = useState(today);
  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handleDateClick = () => {
    if (dateInputRef.current) {
      dateInputRef.current.showPicker(); // date input의 showPicker 메소드 호출 (일부 브라우저 지원)
    }
  };
  return { date, handleDateChange, handleDateClick };
};

export default useDate;
