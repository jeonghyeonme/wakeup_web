import { useEffect, useState } from "react";
import { useFetch } from "../hooks/useFetch"; // 경로는 실제 프로젝트에 맞게 수정
import findSchedulesByUserAndDate from "../1_backendLogic/findSchedulesByUserAndDate";
import useAlertModalAtom from "../Recoil/useAlertModalAtom";

const isDevelopment = process.env.NODE_ENV === "development";

const useGetTripData = (date, userIdx) => {
  const [tripData, setTripData] = useState(null);
  const [serverState, request] = useFetch();
  const [setAlert] = useAlertModalAtom();

  useEffect(() => {
    if (isDevelopment) {
      setTripData(findSchedulesByUserAndDate(date, userIdx));
      return;
    }
    request("GET", `/trip/data?date=${date}&userIdx=${userIdx}`);
  }, [date, userIdx]);

  useEffect(() => {
    if (!serverState) return;
    switch (serverState.status) {
      case 400:
        setAlert("입력 값 오류");
        return;
      case 409:
        setAlert("중복된 데이터가 있습니다.");
        return;
      default:
        break;
    }
    setTripData(serverState?.rows);
  }, [serverState, setAlert]);

  return tripData;
};

export default useGetTripData;
