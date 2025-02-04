import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useGetMyInfo from "../../3_Entities/Account/useGetMyInfo"; // 권한 정보 가져오기

const HomePage = () => {
  const [myInfo] = useGetMyInfo(); // 권한 정보 가져오기
  const navigate = useNavigate();

  useEffect(() => {
    // 권한(type) 확인 후 리디렉트
    if (myInfo?.type === "admin" && window.location.pathname !== "/admin") {
      window.location.href = "/admin"; // 페이지 리로드 및 리디렉션
    } else if (
      myInfo?.type === "crew" &&
      window.location.pathname !== "/crew"
    ) {
      window.location.href = "/crew"; // 페이지 리로드 및 리디렉션
    }
  }, [myInfo, navigate]);
};

export default HomePage;
