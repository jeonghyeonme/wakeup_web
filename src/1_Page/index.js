import { Routes, Route, useLocation } from "react-router-dom";
import AdminPage from "./AdminPage";
import Footer from "./Footer";
import CrewPage from "./CrewPage";
// import Login from "./login";
import FindIdPage from "./FindIdPage";
import FindPwPage from "./FindPwPage";
// import Profile from "./profile";
// import Trip from "./trip";

const Page = () => {
  const location = useLocation();

  // Footer를 제외할 경로 리스트
  const noFooterRoutes = ["/", "/findid", "/findpw"];

  return (
    <>
      <Routes>
        {/* <Route path="/" element={<Login />} /> */}
        <Route path="/findId" element={<FindIdPage />} />
        <Route path="/findPw" element={<FindPwPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/crew" element={<CrewPage />} />
        {/* <Route path="/profile" element={<Profile />} /> */}
        {/* <Route path="/trip" element={<Trip />} /> */}
      </Routes>
      {!noFooterRoutes.includes(location.pathname.toLowerCase()) && <Footer />}
    </>
  );
};

export default Page;
