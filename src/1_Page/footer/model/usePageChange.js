import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const usePageChange = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(location.pathname);

  useEffect(() => {
    navigate(activeTab);
  }, [activeTab, navigate]);

  return { activeTab, setActiveTab };
};

export default usePageChange;
