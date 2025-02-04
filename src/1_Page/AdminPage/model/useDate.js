import { useMemo, useRef, useState } from "react";

const useDate = () => {
  // 한국 시간 기준으로 오늘 날짜 설정
  const today = useMemo(() => new Date(), []); // Date 객체를 그대로 저장

  const dateInputRef = useRef(null);
  const [date, setDate] = useState(today);

  return [dateInputRef, date, setDate]; // formattedDate를 사용하여 날짜 표시
};

export default useDate;
