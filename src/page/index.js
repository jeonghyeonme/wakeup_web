import { Routes, Route } from "react-router-dom";
import Admin from "./admin_main";
import Footer from "./footer";
const Page = () => {
  return (
    <>
      <Routes>
        <Route path="/admin" element={<Admin />} />
      </Routes>
      <Footer />
    </>
  );
};
export default Page;
