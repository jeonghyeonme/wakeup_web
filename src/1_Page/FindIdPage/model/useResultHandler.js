import { useState } from "react";
import useModalHandler from "../../../4_Shared/model/useModalHandler";
import postFindId from "../../../3_Entities/Account/postFindId";
import { useNavigate } from "react-router-dom";

const useResultHandler = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState();
  const [isModalOpen, toggleModal] = useModalHandler();

  // 폼 제출 핸들러
  const onSubmit = async (data) => {
    try {
      const result = await postFindId(data);
      setMessage(result);
      toggleModal();
    } catch (error) {
      setMessage(error.message);
      toggleModal();
    }
  };

  const closeModalToLogin = () => {
    navigate("/login");
  };
  return { message, closeModalToLogin, isModalOpen, onSubmit };
};
export default useResultHandler;
