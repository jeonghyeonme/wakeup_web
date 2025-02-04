import { useEffect, useState } from "react";
import { useFetch } from "../../4_Shared/util/apiUtil"; // 경로 수정 필요
import memberData from "../0_exampleData/memberData";
import useAlertModalAtom from "../../4_Shared/Recoil/useAlertModalAtom";

const isDevelopment = process.env.NODE_ENV === "development";

const useGetMyInfo = (userIdx, time) => {
  const [serverState, request] = useFetch();
  const [setAlert] = useAlertModalAtom();
  const [myInfo, setMyInfo] = useState(null);

  useEffect(() => {
    if (isDevelopment) {
      console.log("개발 모드: 랜덤 테스트 데이터를 반환합니다.");
      setMyInfo(memberData[0]);
      return;
    }
    const queryParams = new URLSearchParams({ userIdx, time }).toString();
    request("GET", `/account/myinfo?${queryParams}`);
  }, [userIdx, time, request]);

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
  }, [serverState, setAlert]);

  return [myInfo];
};

export default useGetMyInfo;
