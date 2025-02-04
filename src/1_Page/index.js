import { Routes, Route } from "react-router-dom";

import AdminPage from "./AdminPage";

import CrewPage from "./CrewPage";
import HomePage from "./HomePage";
import ProtectedRoute from "./ProtectedRoute";
import LoginPage from "./LoginPage";
// import FindIdPage from "./FindIdPage";
// import FindPwPage from "./FindPwPage";
// import ProfilePage from "./ProfilePage";
// import Trip from "./trip";

const Page = () => {
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
        <Route path="/login" element={<LoginPage />} />
        {/* <Route path="/findid" element={<FindIdPage />} /> */}
        {/* <Route path="/findpw" element={<FindPwPage />} /> */}
        {/* <Route path="/profile" element={<ProfilePage />} /> */}
        {/* <Route path="/trip" element={<Trip />} /> */}
      </Routes>
    </>
  );
};

export default Page;
