import React, { useEffect, useState } from "react";
import { DateText, DateInput, HeaderTag } from "./style";
import useDateAtom from "../../../../shared/recoil/useDateAtom";

const Header = () => {
  const today = new Date().toISOString().split("T")[0]; // 현재 날짜 초기값 설정
  const [isEditing, setIsEditing] = useState(false);

  const [date, setDate] = useDateAtom();

  useEffect(() => {
    setDate(today);
  }, [today]);

  const handleDateClick = () => {
    setIsEditing(true);
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handleBlur = () => {
    setIsEditing(false);
  };

  return (
    <HeaderTag>
      {isEditing ? (
        <DateInput
          type="date"
          value={date}
          onChange={handleDateChange}
          onBlur={handleBlur}
          autoFocus
        />
      ) : (
        <DateText onClick={handleDateClick}>
          {new Date(date).toLocaleDateString("ko-KR", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            weekday: "short",
          })}
        </DateText>
      )}
    </HeaderTag>
  );
};

export default Header;
