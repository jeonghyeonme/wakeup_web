import React, { useState } from "react";
import STYLE from "./style";

const CalendarModal = () => {
  const today = new Date();
  const [selectedDate, setSelectedDate] = useState(today);
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());

  const daysInWeek = ["일", "월", "화", "수", "목", "금", "토"];

  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay(); // 이번 달의 첫 번째 요일
  const totalDaysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate(); // 이번 달의 마지막 날

  const handlePrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const handleDateClick = (day) => {
    setSelectedDate(new Date(currentYear, currentMonth, day));
  };

  return (
    <STYLE.Contianer>
      <STYLE.Wrapper>
        <STYLE.Text>날짜선택</STYLE.Text>
        <STYLE.SelectedDate>
          {selectedDate.toISOString().split("T")[0].replace(/-/g, ".")}{" "}
          {["일", "월", "화", "수", "목", "금", "토"][selectedDate.getDay()]}
        </STYLE.SelectedDate>
        <STYLE.MonthSelector>
          <span>
            {currentYear}년 {currentMonth + 1}월
          </span>
          <STYLE.Arrow onClick={handlePrevMonth}>◀</STYLE.Arrow>
        </STYLE.MonthSelector>

        <STYLE.CalendarGrid>
          {daysInWeek.map((day, index) => (
            <STYLE.DayHeader key={index}>{day}</STYLE.DayHeader>
          ))}
          {Array.from({ length: firstDayOfMonth }, (_, i) => (
            <STYLE.Day key={`empty-${i}`} />
          ))}
          {Array.from({ length: totalDaysInMonth }, (_, i) => i + 1).map(
            (day) => (
              <STYLE.Day
                key={day}
                isSelected={
                  selectedDate.getDate() === day &&
                  selectedDate.getMonth() === currentMonth
                }
                onClick={() => handleDateClick(day)}>
                {day}
              </STYLE.Day>
            )
          )}
        </STYLE.CalendarGrid>

        <STYLE.ButtonGroup>
          <STYLE.CancelButton>취소</STYLE.CancelButton>
          <STYLE.ConfirmButton>확인</STYLE.ConfirmButton>
        </STYLE.ButtonGroup>
      </STYLE.Wrapper>
    </STYLE.Contianer>
  );
};

export default CalendarModal;
