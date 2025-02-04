import { useEffect, useState } from "react";
import { useFetch } from "../../4_Shared/util/apiUtil"; // 경로는 실제 프로젝트에 맞게 수정
import findSchedulesByUserAndDate from "../1_backendLogic/findSchedulesByUserAndDate";
import useAlertModalAtom from "../../4_Shared/Recoil/useAlertModalAtom";

const isDevelopment = process.env.NODE_ENV === "development";

const useGetTripData = (date) => {
  const [tripData, setTripData] = useState(null);
  const [serverState, request] = useFetch();
  const [setAlert] = useAlertModalAtom();

  useEffect(() => {
    if (isDevelopment) {
      setTripData(findSchedulesByUserAndDate(date, 202));
      return;
    }
    request("GET", `/trip/data?date=${date}`);
  }, [date]);

  useEffect(() => {
    if (!serverState) return;
    switch (serverState.status) {
      case 400:
        setAlert("입력 값 오류");
        return;

      default:
        break;
    }
    setTripData(serverState?.rows);
  }, [serverState, setAlert]);

  return [tripData];
};

export default useGetTripData;
