import React, { useState } from "react";
import STYLE from "./style";
import MonthPicker from "./ui/MonthPicker";

const CalendarModal = () => {
  const today = new Date();
  const [selectedDate, setSelectedDate] = useState(today);
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [isModalPicker, setIsModalPicker] = useState(false);

  const daysInWeek = ["일", "월", "화", "수", "목", "금", "토"];

  const lastDayOfPreviousMonth = new Date(
    currentYear,
    currentMonth,
    0
  ).getDate();
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
  const totalDaysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

  const handlePrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const handleDateClick = (day) => {
    setSelectedDate(new Date(currentYear, currentMonth, day));
  };

  const toggleModalPicker = () => {
    setIsModalPicker(!isModalPicker);
  };

  return (
    <STYLE.Contianer>
      <STYLE.Wrapper>
        <STYLE.Text>날짜선택</STYLE.Text>
        <STYLE.SelectedDate>
          {selectedDate.toISOString().split("T")[0].replace(/-/g, ".")}{" "}
          {["일", "월", "화", "수", "목", "금", "토"][selectedDate.getDay()]}
        </STYLE.SelectedDate>

        {/* 연도 및 월 선택 모달 토글 */}
        <STYLE.MonthSelector>
          <span onClick={toggleModalPicker} style={{ cursor: "pointer" }}>
            {currentYear}년 {currentMonth + 1}월
          </span>
          <STYLE.Arrow onClick={handlePrevMonth}>◀</STYLE.Arrow>
        </STYLE.MonthSelector>

        <STYLE.CalendarGrid>
          {daysInWeek.map((day, index) => (
            <STYLE.DayHeader key={index}>{day}</STYLE.DayHeader>
          ))}
          {Array.from({ length: firstDayOfMonth }, (_, i) => {
            const previousDate = new Date(
              currentYear,
              currentMonth - 1,
              lastDayOfPreviousMonth - firstDayOfMonth + i + 1
            );
            return (
              <STYLE.Day
                key={`empty-${i}`}
                style={{ color: "gray", opacity: 0.5 }}>
                {previousDate.getDate()}
              </STYLE.Day>
            );
          })}
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

      {/* 월/년 선택 모달 */}
      {isModalPicker && (
        <MonthPicker
          currentMonth={currentMonth}
          currentYear={currentYear}
          setCurrentMonth={setCurrentMonth}
          setCurrentYear={setCurrentYear}
          toggleModalPicker={toggleModalPicker}
        />
      )}
    </STYLE.Contianer>
  );
};

export default CalendarModal;
