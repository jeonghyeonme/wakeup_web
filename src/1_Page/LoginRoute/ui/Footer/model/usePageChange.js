import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const usePageChange = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(location.pathname);

  // 현재 경로가 변경되면 상태를 업데이트
  useEffect(() => {
    setActiveTab(location.pathname);
  }, [location.pathname]);

  // 탭이 변경되었을 때만 경로 이동
  useEffect(() => {
    if (activeTab !== location.pathname) {
      navigate(activeTab);
    }
  }, [activeTab, navigate, location.pathname]);

  return [activeTab, setActiveTab];
};

export default usePageChange;
