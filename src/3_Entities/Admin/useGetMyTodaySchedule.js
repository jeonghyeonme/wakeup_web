import { useEffect, useState } from "react";
import { useFetch } from "../../4_Shared/util/apiUtil"; // useFetch 경로는 실제 경로에 맞게 수정
import useAlertModalAtom from "./Recoil/useAlertModalAtom";
import findSchedulesByUserAndDate from "../1_backendLogic/findSchedulesByUserAndDate";

const testUserIdx = process.env.REACT_APP_TEST_USERIDX;
const isDevelopment = process.env.NODE_ENV === "development";

const useGetMyTodaySchedule = (dateTime) => {
  const [serverState, request] = useFetch();
  const [setAlert] = useAlertModalAtom();
  const [busDriverDatedata, setBusDriverDatedata] = useState(null);

  useEffect(() => {
    if (isDevelopment) {
      console.log("개발 모드: 테스트 데이터를 반환합니다.");
      setBusDriverDatedata(findSchedulesByUserAndDate(testUserIdx, dateTime));
      return;
    }
    const dateTimeISO = dateTime.toISOString();
    request("GET", `/admin/dateTime/${encodeURIComponent(dateTimeISO)}`);
  }, [dateTime, request]);

  useEffect(() => {
    if (!serverState) return;
    switch (serverState?.status) {
      case 400:
        setAlert("입력 값 오류");
        return;
      case 409:
        setAlert("중복된 데이터가 존재합니다.");
        return;
      default:
        break;
    }
    setBusDriverDatedata(serverState?.rows);
  }, [serverState]);

  return [busDriverDatedata];
};

export default useGetMyTodaySchedule;
