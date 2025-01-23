import { useEffect, useState, useCallback } from "react";
import getBusSchedlueData from "../../../3_Entities/crew/getBusSchedlueData";

const useGetBusScheduleData = (date, userIdx, time) => {
  const [busScheduleData, setBusScheduleData] = useState([]);

  const fetchDateDriver = useCallback(async () => {
    try {
      const busScheduleData = await getBusSchedlueData(date, userIdx, time);
      setBusScheduleData((prev) => [...prev, ...busScheduleData]);
    } catch (error) {
      console.error("버스 기사 데이터를 가져오는 중 오류 발생:", error.message);
    }
  }, [date]);

  useEffect(() => {
    fetchDateDriver();
  }, [fetchDateDriver]);

  return { busScheduleData };
};

export default useGetBusScheduleData;
