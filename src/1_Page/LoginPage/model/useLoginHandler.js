import { useNavigate } from "react-router-dom";
import postLogin from "../../../3_Entities/Account/postLogin";
import useErrorModal from "../../../4_Shared/model/useErrorModal";
const useLoginHandler = (idRef, pwRef) => {
  const navigate = useNavigate();
  const { errorMessage, isModalOpen, showErrorModal, toggleModal } =
    useErrorModal();
  const loginClick = async () => {
    const id = idRef.current?.getValue();
    const password = pwRef.current?.getValue();
    console.log(id, password);
    try {
      const result = await postLogin(id, password);
      navigate("/crew");
    } catch (error) {
      showErrorModal(error.message);
    }
  };
  return { loginClick, errorMessage, isModalOpen, toggleModal };
};
export default useLoginHandler;
