import { useEffect } from "react";
import { useFetch } from "../../4_Shared/util/apiUtil";
import useAlertModalAtom from "../../4_Shared/Recoil/useAlertModalAtom";

const useFindId = () => {
  const [serverState, request] = useFetch();
  const [setAlert] = useAlertModalAtom();

  const findId = async (name, phone, company) => {
    await request("POST", "/account/find-id", {
      name,
      phone,
      company,
    });
  };

  useEffect(() => {
    if (!serverState) return;
    switch (serverState.status) {
      case 400:
        setAlert("입력 값 오류: 전화번호나 회사명을 확인하세요.");
        break;
      case 404:
        setAlert("아이디를 찾을 수 없습니다.");
        break;
      default:
        setAlert("알 수 없는 오류가 발생했습니다.");
        break;
    }
    setAlert(`아이디를 찾았습니다: ${serverState.id}`);
  }, [serverState]);

  return [findId];
};

export default useFindId;
