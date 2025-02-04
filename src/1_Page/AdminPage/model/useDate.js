import { useRef, useState } from "react";

const useDate = () => {
  const dateInputRef = useRef(null); // DateInput 요소에 접근할 ref 생성

  // YYYY-MM-DD
  const today = new Date()
    .toLocaleDateString("ko-KR", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    })
    .replace(/\. /g, "-")
    .replace(".", "")
    .replace(" ", "");

  const [date, setDate] = useState(today);

  // 날짜 객체를 받아서 상태 업데이트
  const handleDateChange = (newDate) => {
    const formattedDate = newDate.toISOString().split("T")[0];
    setDate(formattedDate);
  };

  return [dateInputRef, date, handleDateChange];
};

export default useDate;
