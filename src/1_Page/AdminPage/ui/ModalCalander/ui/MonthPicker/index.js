import React from "react";
import STYLE from "./style";
import useScroll from "./model/useScroll";

const MonthPicker = (props) => {
  const {
    currentMonth,
    currentYear,
    setCurrentMonth,
    setCurrentYear,
    toggleModalPicker,
  } = props;

  const [yearListRef, monthListRef] = useScroll(currentYear, currentMonth);

  const handleSelectMonth = (month) => {
    setCurrentMonth(month);
    toggleModalPicker(); // 모달 닫기
  };

  const handleSelectYear = (year) => {
    setCurrentYear(year);
    toggleModalPicker(); // 모달 닫기
  };

  return (
    <>
      <STYLE.ModalBackdrop onClick={toggleModalPicker} />
      <STYLE.PickerOverlay>
        <STYLE.PickerSection>
          <STYLE.SectionTitle>연도 선택</STYLE.SectionTitle>
          <STYLE.ScrollableList ref={yearListRef}>
            {[...Array(21)].map((_, i) => {
              const year = currentYear - 10 + i;
              return (
                <STYLE.PickerItem
                  key={year}
                  data-year={year}
                  onClick={() => handleSelectYear(year)}
                  isSelected={year === currentYear}>
                  {year}년
                </STYLE.PickerItem>
              );
            })}
          </STYLE.ScrollableList>
        </STYLE.PickerSection>

        <STYLE.PickerSection>
          <STYLE.SectionTitle>월 선택</STYLE.SectionTitle>
          <STYLE.ScrollableList ref={monthListRef}>
            {Array.from({ length: 12 }, (_, i) => (
              <STYLE.PickerItem
                key={i}
                data-month={i}
                onClick={() => handleSelectMonth(i)}
                isSelected={i === currentMonth}>
                {i + 1}월
              </STYLE.PickerItem>
            ))}
          </STYLE.ScrollableList>
        </STYLE.PickerSection>
      </STYLE.PickerOverlay>
    </>
  );
};

export default MonthPicker;
