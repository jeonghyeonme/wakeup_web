import React, { useEffect, useState } from "react";
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
  const [selectYear, setSelecetYear] = useState(currentYear);

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
                  onClick={() => setSelecetYear(year)}
                  isSelected={year === selectYear}>
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
                onClick={() => {
                  setCurrentMonth(i);
                  setCurrentYear(selectYear);
                  toggleModalPicker();
                }}
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
