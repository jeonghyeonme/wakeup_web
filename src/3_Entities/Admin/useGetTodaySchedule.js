import { useEffect, useState } from "react";
import { useFetch } from "../../4_Shared/util/apiUtil"; // useFetch 경로는 실제 경로에 맞게 수정
import useAlertModalAtom from "../../4_Shared/Recoil/useAlertModalAtom";
import findSchedulesByUserAndDate from "../1_backendLogic/findSchedulesByDate";

const isDevelopment = process.env.NODE_ENV === "development";

const useGetTodaySchedule = (dateTime) => {
  const [serverState, request] = useFetch();
  const [setAlert] = useAlertModalAtom();
  const [busDriverDatedata, setBusDriverDatedata] = useState(null);

  useEffect(() => {
    if (isDevelopment) {
      setBusDriverDatedata(findSchedulesByUserAndDate(dateTime));
      return;
    }
    const dateTimeISO = dateTime.toISOString();
    request("GET", `/admin/dateTime/${encodeURIComponent(dateTimeISO)}`);
  }, [dateTime]);

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

export default useGetTodaySchedule;
