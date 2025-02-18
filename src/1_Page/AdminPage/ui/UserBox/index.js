import STYLE from "./style";
import ModalBase from "../../../../2_Widget/ModalBase";
import useModalHandler from "../../../../4_Shared/model/useModalHandler";
import { format } from "date-fns";

const UserBox = (props) => {
  const {
    schedule: {
      date,
      title,
      driver: { phone, name },
      start_time,
    },
    isEnoughTime,
  } = props;
  const [isModalOpen, toggleModal] = useModalHandler();

  return (
    <>
      <STYLE.Container $wakeup={isEnoughTime} onClick={toggleModal}>
        <STYLE.Text>{name}</STYLE.Text>
        <STYLE.Time>
          {title} {format(start_time, "HH:mm")}
        </STYLE.Time>
      </STYLE.Container>
      {isModalOpen && (
        <ModalBase onClose={toggleModal} snap={[0.2]}>
          {({ handleClose }) => (
            <STYLE.ModalContainer>
              <STYLE.DateText>{date}</STYLE.DateText>
              <STYLE.PhoneText>{phone}</STYLE.PhoneText>
              <STYLE.NameText>기사 {name}</STYLE.NameText>
              <STYLE.Button type="call">전화하기</STYLE.Button>
              <STYLE.Button type="report">지각처리</STYLE.Button>
            </STYLE.ModalContainer>
          )}
        </ModalBase>
      )}
    </>
  );
};

export default UserBox;
