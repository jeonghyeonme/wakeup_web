import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";

const isDevelopment = process.env.NODE_ENV === "development";

const useIsLogin = () => {
  const [isLogin, setIsLogin] = useState(null);

  const [cookies] = useCookies(["access_token", "refresh_token"]);

  useEffect(() => {
    if (isDevelopment) {
      setIsLogin(true);
      return;
    }
    cookies["accessToken"] ? setIsLogin(true) : setIsLogin(false);
  }, []);

  return [isLogin]; // 로그인 상태를 반환
};

export default useIsLogin;
