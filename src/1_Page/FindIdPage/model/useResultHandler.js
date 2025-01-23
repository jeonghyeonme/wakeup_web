import { useState } from "react";
import useModalHandler from "../../../4_Shared/model/useModalHandler";
import postFindPw from "../../../3_Entities/Account/postFindPw";
import { useNavigate } from "react-router-dom";

const useResultHandler = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState();
  const [isModalOpen, toggleModal] = useModalHandler();

  // 폼 제출 핸들러
  const onSubmit = async (data) => {
    console.log("입력된 데이터:", data);
    const { result, sucsess, message } = await postFindPw(data);

    if (sucsess) {
      setMessage(result);
    } else {
      setMessage(message);
    }
    toggleModal();
  };

  const closeModalToLogin = () => {
    navigate("/login");
  };
  return { message, closeModalToLogin, isModalOpen, onSubmit };
};
export default useResultHandler;
