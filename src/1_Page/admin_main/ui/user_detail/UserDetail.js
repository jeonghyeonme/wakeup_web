import React from "react";
import {
  ModalOverlay,
  ModalContainer,
  DateText,
  PhoneText,
  NameText,
  Button,
} from "./style";

const UserDetail = ({ isModalOpen, onClose, date, phone, name, frame }) => {
  if (!isModalOpen) return null;

  return (
    <ModalOverlay isOpen={isModalOpen} onClick={onClose}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <DateText>{date}</DateText>
        <PhoneText>{phone}</PhoneText>
        <NameText>기사 {name}</NameText>
        <Button type="call">전화하기</Button>
        <Button type="report">지각처리</Button>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default UserDetail;
