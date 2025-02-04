import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

const useLogout = () => {
  const [cookies, , removeCookie] = useCookies([
    "access_token",
    "refresh_token",
  ]);
  const navigate = useNavigate();

  const logout = () => {
    // 쿠키에서 액세스 토큰과 리프레시 토큰 삭제
    removeCookie("access_token", { path: "/" });
    removeCookie("refresh_token", { path: "/" });

    // 로그아웃 후 로그인 페이지로 리다이렉트
    navigate("/login");
  };

  return [logout];
};

export default useLogout;
