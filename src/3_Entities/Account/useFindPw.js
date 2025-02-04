import { useEffect } from "react";
import { useFetch } from "../../4_Shared/util/apiUtil";
import useAlertModalAtom from "../../4_Shared/Recoil/useAlertModalAtom";

const useFindPw = () => {
  const [serverState, request] = useFetch();
  const [setAlert] = useAlertModalAtom();

  const findPw = async ({ id, phone, company }) => {
    console.log(id, phone, company);
    await request("POST", "/account/find-password", {
      id,
      phone,
      company,
    });
  };

  useEffect(() => {
    if (!serverState) return;

    switch (serverState.status) {
      case 400:
        setAlert("입력 값 오류: 전화번호나 회사명을 확인하세요.");
        return;
      case 404:
        setAlert("아이디를 찾을 수 없습니다.");
        return;
      default:
        break;
    }
    setAlert(`찾으시려는 비밀번호는 ${serverState.password} 입니다.`);
  }, [serverState]);

  return [findPw];
};

export default useFindPw;
