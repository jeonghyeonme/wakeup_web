import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const usePageChange = (initialTab = "crew") => {
  const [activeTab, setActiveTab] = useState(initialTab);
  const navigate = useNavigate();

  useEffect(() => {
    navigate(activeTab);
  }, [activeTab, navigate]);

  return { activeTab, setActiveTab };
};

export default usePageChange;
