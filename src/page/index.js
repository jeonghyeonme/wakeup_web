import { Routes, Route } from "react-router-dom";
import Admin from "./admin_main";
import Footer from "./footer";
import Crew from "./crew_main";
const Page = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Crew />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/crew" element={<Crew />} />
      </Routes>
      <Footer />
    </>
  );
};
export default Page;
