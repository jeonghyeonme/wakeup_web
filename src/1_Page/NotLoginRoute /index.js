import { Navigate } from "react-router-dom";
import useIsLogin from "../../4_Shared/model/useIsLogin";

const NotLoginRoute = ({ element }) => {
  const [isLogin] = useIsLogin();

  // 로그인 상태가 확인되지 않은 경우 로딩 표시
  if (isLogin === null) {
    return <div>Loading...</div>;
  }

  // 로그인한 경우
  if (isLogin === true) {
    return <Navigate to="/" replace />;
  }

  // 로그인한 경우 해당 컴포넌트를 렌더링
  return <>{element}</>;
};

export default NotLoginRoute;
