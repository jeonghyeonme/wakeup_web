import STYLE from "./style";
import ModalBase from "../../../../2_Widget/ModalBase";
import useModalHandler from "../../../../4_Shared/model/useModalHandler";

const UserBox = (props) => {
  const { date, driver } = props;
  const [isModalOpen, toggleModal] = useModalHandler();

  return (
    <>
      <STYLE.Container wakeup={props.wakeup} onClick={toggleModal}>
        <STYLE.Text>{props.driver.name}</STYLE.Text>
        <STYLE.Time>{props.time}</STYLE.Time>
      </STYLE.Container>
      {isModalOpen && (
        <ModalBase onClose={toggleModal} snap={[0.2]}>
          {({ handleClose }) => (
            <STYLE.ModalContainer>
              <STYLE.DateText>{date}</STYLE.DateText>
              <STYLE.PhoneText>{driver.phone}</STYLE.PhoneText>
              <STYLE.NameText>기사 {driver.name}</STYLE.NameText>
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
