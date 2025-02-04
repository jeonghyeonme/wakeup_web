import React, { useEffect, useRef } from "react";
import { DateText, DateInput, HeaderTag } from "./style";
import useDateAtom from "../../../../shared/recoil/useDateAtom";
import { format } from "date-fns";

const Header = () => {
  const today = format(new Date(), "yyyy-MM-dd");
  const [date, setDate] = useDateAtom();
  const dateInputRef = useRef(null); // DateInput 요소에 접근할 ref 생성

  useEffect(() => {
    setDate(today);
  }, [today]);

  const handleDateClick = () => {
    if (dateInputRef.current) {
      dateInputRef.current.showPicker(); // date input의 showPicker 메소드 호출 (일부 브라우저 지원)
    }
  };

  return (
    <HeaderTag>
      <DateText onClick={handleDateClick}>
        {new Date(date).toLocaleDateString("ko-KR", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
          weekday: "short",
        })}
      </DateText>
      <DateInput
        ref={dateInputRef} // DateInput 요소에 ref 연결
        type="date"
        value={date}
        onChange={(e) => {
          setDate(e.target.value);
        }}
      />
    </HeaderTag>
  );
};

export default Header;
