import { Routes, Route, useLocation } from "react-router-dom";
// import AdminPage from "./AdminPage";
import Footer from "./Footer";
import CrewPage from "./CrewPage";
// import LoginPage from "./LoginPage";
// import FindIdPage from "./FindIdPage";
// import FindPwPage from "./FindPwPage";
// import ProfilePage from "./ProfilePage";
// import Trip from "./trip";

const Page = () => {
  const location = useLocation();
  // Footer를 제외할 경로 리스트
  const noFooterRoutes = ["/login", "/findid", "/findpw"];

  return (
    <>
      <Routes>
        {/* <Route path="/login" element={<LoginPage />} /> */}
        {/* <Route path="/findid" element={<FindIdPage />} /> */}
        {/* <Route path="/findpw" element={<FindPwPage />} /> */}
        {/* <Route path="/admin" element={<AdminPage />} /> */}
        <Route path="/crew" element={<CrewPage />} />
        {/* <Route path="/profile" element={<ProfilePage />} /> */}
        {/* <Route path="/trip" element={<Trip />} /> */}
      </Routes>
      {!noFooterRoutes.includes(location.pathname.toLowerCase()) && <Footer />}
    </>
  );
};

export default Page;
