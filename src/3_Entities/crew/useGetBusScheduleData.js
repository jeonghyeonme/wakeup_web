import { useEffect, useState } from "react";
import { useFetch } from "../../4_Shared/util/apiUtil";
import useAlertModalAtom from "../../4_Shared/Recoil/useAlertModalAtom";
import findUpcomingSchedule from "../1_backendLogic/findUpcomingSchedule";

const isDevelopment = process.env.NODE_ENV === "development";

const useGetBusScheduleData = (dateTime) => {
  const [serverState, request] = useFetch();
  const [setAlert] = useAlertModalAtom();
  const [busScheduleData, setBusScheduleData] = useState([]);

  useEffect(() => {
    if (isDevelopment) {
      // 테스트 환경에서 dateTime, findUpcomingSchedule 호출
      const date = new Date("2024-11-14T08:00:00");
      setBusScheduleData(findUpcomingSchedule(date) || []);
      return;
    }
    const formattedDateTime =
      dateTime instanceof Date ? dateTime.toISOString() : dateTime;
    const endpoint = `/crew/dateTime/${encodeURIComponent(formattedDateTime)}`;

    request("GET", endpoint);
  }, [dateTime]);

  useEffect(() => {
    if (!serverState) return;

    switch (serverState.status) {
      case 400:
        setAlert("입력 값 오류: 날짜, 사용자 정보 또는 시간을 확인하세요.");
        return;
      case 409:
        setAlert("중복된 일정이 존재합니다.");
        return;
      default:
        break;
    }
    setBusScheduleData(serverState || []);
  }, [serverState]);

  return [busScheduleData];
};

export default useGetBusScheduleData;
