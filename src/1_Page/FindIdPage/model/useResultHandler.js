import { useState } from "react";
import useModalHandler from "../../../4_Shared/model/useModalHandler";
import postFindId from "../../../3_Entities/Account/postFindId";

const useResultHandler = () => {
  const [message, setMessage] = useState();
  const [isModalOpen, toggleModal] = useModalHandler();

  // 폼 제출 핸들러
  const onSubmit = async (data) => {
    console.log("입력된 데이터:", data);
    const { result, sucsess, message } = await postFindId(data);

    if (sucsess) {
      setMessage(result);
    } else {
      setMessage(message);
    }
    toggleModal();
  };
  return { message, toggleModal, isModalOpen, onSubmit };
};
export default useResultHandler;
