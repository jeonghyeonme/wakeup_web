import { useEffect, useState, useCallback } from "react";
import getMyInfo from "../../../3_Entities/Account/getMyInfo";
import { useNavigate } from "react-router-dom";

const useGetUserMyInfo = (showErrorModal) => {
  const [userInfo, setUserInfo] = useState([]);
  const navigate = useNavigate();

  const fetchUserInfo = useCallback(async () => {
    try {
      const userInfoData = await getMyInfo();
      if (userInfoData.type === "crew") {
        navigate("/crew");
        return;
      }
      if (userInfoData.type !== "admin") {
        showErrorModal("잘못된 권한입니다");
      }
      setUserInfo(userInfoData);
    } catch (error) {
      showErrorModal(error.message);
    }
  }, []);

  useEffect(() => {
    fetchUserInfo();
  }, [fetchUserInfo]);

  return { userInfo };
};

export default useGetUserMyInfo;
