import { useEffect } from "react";
import { useCookies } from "react-cookie";
import { useFetch } from "../../4_Shared/util/apiUtil";
import useAlertModalAtom from "../../4_Shared/Recoil/useAlertModalAtom";

const useLogin = () => {
  const [serverState, request] = useFetch();
  const [, setCookies] = useCookies();
  const [setAlert] = useAlertModalAtom();
  const loginEvent = async (id, pw) => {
    await request("POST", "/account/login", {
      id,
      password: pw,
    });
  };
  useEffect(() => {
    if (!serverState) return;
    switch (serverState.status) {
      case 409:
        setAlert("아이디 또는 비밀번호가 일치하지 않습니다");
        return;
      default:
        break;
    }
    const { accessToken, refreshToken, type } = serverState;
    // 쿠키 설정
    setCookies("accessToken", accessToken, { path: "/" });
    setCookies("refreshToken", refreshToken, { path: "/" });
    setCookies("type", type, { path: "/" });
  }, [serverState]);

  return [loginEvent];
};

export default useLogin;
