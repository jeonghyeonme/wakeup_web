import { Routes, Route } from "react-router-dom";
import Admin from "./admin_main";
import Footer from "./footer";
import Crew from "./crew_main";
import Login from "./login";
import FindId from "./find_id";
import FindPw from "./find_pw";
import Profile from "./profile";

const Page = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/findId" element={<FindId />} />
        <Route path="/findPw" element={<FindPw />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/crew" element={<Crew />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <Footer />
    </>
  );
};
export default Page;
