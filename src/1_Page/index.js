import { Routes, Route, useLocation, Navigate } from "react-router-dom";

import AdminPage from "./AdminPage";
import Footer from "./Footer";
import CrewPage from "./CrewPage";
import HomePage from "./HomePage";
import useIsLogin from "../4_Shared/model/useIsLogin";
// import LoginPage from "./LoginPage";
// import FindIdPage from "./FindIdPage";
// import FindPwPage from "./FindPwPage";
// import ProfilePage from "./ProfilePage";
// import Trip from "./trip";

const Page = () => {
  const location = useLocation();
  const noFooterRoutes = ["/login", "/findid", "/findpw"];
  const [isLogin] = useIsLogin();

  const ProtectedRoute = ({ element }) => {
    if (!isLogin) {
      return <Navigate to="/login" />;
    }
    return element;
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/admin"
          element={<ProtectedRoute element={<AdminPage />} />}
        />
        <Route
          path="/crew"
          element={<ProtectedRoute element={<CrewPage />} />}
        />
        <Route path="/login" element={<AdminPage />} />
        {/* <Route path="/findid" element={<FindIdPage />} /> */}
        {/* <Route path="/findpw" element={<FindPwPage />} /> */}
        {/* <Route path="/profile" element={<ProfilePage />} /> */}
        {/* <Route path="/trip" element={<Trip />} /> */}
      </Routes>
      {!noFooterRoutes.includes(location.pathname.toLowerCase()) && <Footer />}
    </>
  );
};

export default Page;
