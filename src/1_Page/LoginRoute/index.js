import { Navigate } from "react-router-dom";
import Footer from "./ui/Footer";

const LoginRoute = ({ isLogin, element }) => {
  return isLogin === null ? (
    <div>Loading...</div>
  ) : isLogin === false ? (
    <Navigate to="/login" replace />
  ) : (
    <>
      {element}
      <Footer />
    </>
  );
};

export default LoginRoute;
