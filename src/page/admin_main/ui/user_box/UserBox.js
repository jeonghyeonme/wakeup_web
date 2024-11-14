import { Container, Text, Time } from "./style";
import { useState } from "react";
import UserDetail from "../user_detail/UserDetail";

const UserBox = (props) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <Container wakeup={props.wakeup} onClick={handleOpenModal}>
        <Text>{props.driver.name}</Text>
        <Time>{props.time}</Time>
      </Container>
      {isModalOpen && (
        <UserDetail
          isModalOpen={isModalOpen}
          onClose={handleCloseModal}
          date={props.date}
          phone={props.driver.phone}
          name={props.driver.name}
        />
      )}
    </>
  );
};

export default UserBox;
