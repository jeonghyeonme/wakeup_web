import { useEffect } from "react";
import { useFetch } from "../../4_Shared/util/apiUtil";
import useAlertModalAtom from "../../4_Shared/Recoil/useAlertModalAtom";
import findUpcomingSchedule from "./findUpcomingSchedule";

const isDevelopment = process.env.NODE_ENV === "development";

const useGetBusScheduleData = (date, userIdx, time) => {
  const [serverState, request] = useFetch();
  const [setAlert] = useAlertModalAtom();

  useEffect(() => {
    if (isDevelopment) {
      return findUpcomingSchedule("2024-11-20", userIdx, "14:00");
    }
    const endpoint = `/bus/schedule?date=${date}&userIdx=${userIdx}&time=${time}`;
    request("GET", endpoint);
  }, [date, userIdx, time]);

  useEffect(() => {
    if (!serverState) return;
    switch (serverState.status) {
      case 400:
        setAlert("입력 값 오류: 날짜, 사용자 정보 또는 시간을 확인하세요.");
        break;
      case 409:
        setAlert("중복된 일정이 존재합니다.");
        break;
      default:
        setAlert("서버 오류가 발생했습니다.");
        break;
    }
  }, [serverState]);

  return [serverState];
};

export default useGetBusScheduleData;
