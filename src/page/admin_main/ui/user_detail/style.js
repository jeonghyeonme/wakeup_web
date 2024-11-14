import styled, { keyframes } from "styled-components";

const slideUp = keyframes`
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
  }
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: ${(props) => (props.isOpen ? "flex" : "none")};
  align-items: flex-end;
  justify-content: center;
  z-index: 1000;
`;

export const ModalContainer = styled.div`
  background: white;
  width: 90%;
  max-width: 400px;
  padding: 20px;
  border-radius: 15px 15px 0 0;
  text-align: center;
  animation: ${slideUp} 0.3s ease-out;
`;

export const DateText = styled.div`
  font-size: 14px;
  color: #7ed321;
  margin-bottom: 10px;
`;

export const PhoneText = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const NameText = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const FrameText = styled.div`
  font-size: 12px;
  color: #888;
  margin-bottom: 20px;
`;

export const Button = styled.button`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-bottom: 10px;
  color: white;

  background-color: ${(props) =>
    props.type === "call" ? "#7ed321" : "#f08080"};
`;
