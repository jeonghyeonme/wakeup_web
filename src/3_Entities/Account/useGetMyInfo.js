import { useEffect, useState } from "react";

import memberData from "../0_exampleData/memberData";

import { useFetch } from "../../4_Shared/util/apiUtil"; // 경로 수정 필요
import useAlertModalAtom from "../../4_Shared/Recoil/useAlertModalAtom";

const isDevelopment = process.env.NODE_ENV === "development";

const useGetMyInfo = () => {
  const [serverState, request] = useFetch();
  const [setAlert] = useAlertModalAtom();
  const [myInfo, setMyInfo] = useState(null);

  useEffect(() => {
    if (isDevelopment) {
      setMyInfo(memberData[0]);
      return;
    }
    request("GET", `/account/myinfo`);
  }, []);

  useEffect(() => {
    if (!serverState) return;
    switch (serverState?.status) {
      case 400:
        setAlert("입력 값 오류: 요청 형식을 확인하세요.");
        return;
      case 401:
        setAlert("인증 실패: 유효한 토큰이 필요합니다.");
        return;
      case 403:
        setAlert("권한 없음: 접근 권한이 없습니다.");
        return;
      case 404:
        setAlert("데이터 없음: 요청한 정보를 찾을 수 없습니다.");
        return;
      case 409:
        setAlert("중복된 일정이 존재합니다.");
        return;
      default:
        break;
    }
    setMyInfo(serverState);
  }, [serverState]);

  return [myInfo];
};

export default useGetMyInfo;
