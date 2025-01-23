import React from "react";
import { useNavigate } from "react-router-dom";
import { getCookie } from "../../../shared/cookie/cookie";

const usePageChange = () => {
  const navigate = useNavigate();

  const handleRouteChange = (path) => {
    const cookieData = getCookie("user_data");
    if (!cookieData) {
      alert("잘못된 접속");
      navigate("/");
    }
    navigate(path); // 원하는 경로로 변경
    if (path === "home") {
      navigate(`/${cookieData.type}`);
    }
  };

  return handleRouteChange;
};

export default usePageChange;
