import { Routes, Route } from "react-router-dom";

import AdminPage from "./AdminPage";

import CrewPage from "./CrewPage";
import HomePage from "./HomePage";
import LoginRoute from "./LoginRoute";
import NotLoginRoute from "./NotLoginRoute ";
import LoginPage from "./LoginPage";
import FindIdPage from "./FindIdPage";
import FindPwPage from "./FindPwPage";
import ProfilePage from "./ProfilePage";
// import Trip from "./trip";

const Page = () => {

  return (
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/admin" element={<LoginRoute element={<AdminPage />} />} />
        <Route path="/crew" element={<LoginRoute element={<CrewPage />} />} />
        <Route path="/profile" element={<LoginRoute element={<ProfilePage />} />} />
        <Route path="/login" element={<NotLoginRoute element={<LoginPage />} />} />
        <Route path="/findid" element={<NotLoginRoute element={<FindIdPage />} />} />
        <Route path="/findpw" element={<NotLoginRoute element={<FindPwPage />} />} />
        {/* <Route path="/trip" element={<Trip />} /> */}
      </Routes>
  );
};

export default Page;
