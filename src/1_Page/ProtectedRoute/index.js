import { Navigate } from "react-router-dom";
import useIsLogin from "../../4_Shared/model/useIsLogin";
import Footer from "./ui/Footer";

const ProtectedRoute = ({ element }) => {
  const [isLogin] = useIsLogin();

  // 로그인 상태가 확인되지 않은 경우 로딩 표시
  if (isLogin === null) {
    return <div>Loading...</div>;
  }

  // 로그인하지 않은 경우 리다이렉트
  if (isLogin === false) {
    return <Navigate to="/login" replace />;
  }

  // 로그인한 경우 해당 컴포넌트를 렌더링
  return (
    <>
      {element}
      <Footer />
    </>
  );
};

export default ProtectedRoute;
