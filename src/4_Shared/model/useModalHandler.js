import { useState } from "react";

const useModalHandler = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen((pre) => !pre);
  };
  return [isModalOpen, toggleModal];
};
export default useModalHandler;
