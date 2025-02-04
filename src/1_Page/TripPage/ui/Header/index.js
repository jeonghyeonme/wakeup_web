import React from "react";
import STYLE from "./style";
import CalendarModal from "../../../../2_Widget/ModalCalander";
import useModalHandler from "../../../../4_Shared/model/useModalHandler";
import { format } from "date-fns";
import { ko } from "date-fns/locale";

const Header = (props) => {
  const { date, setDate } = props;
  const [isModalOpen, isModalToggle] = useModalHandler();
  const formattedDate = format(date, "yyyy.MM.dd (EEEE)", { locale: ko });

  return (
    <>
      <STYLE.HeaderTag>
        <STYLE.DateText onClick={isModalToggle}>{formattedDate}</STYLE.DateText>
        <STYLE.TextIcon>{"▼"}</STYLE.TextIcon>
      </STYLE.HeaderTag>
      {isModalOpen && (
        <CalendarModal setDate={setDate} onClose={isModalToggle} />
      )}
    </>
  );
};

export default Header;
