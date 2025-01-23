import { useEffect, useState, useCallback } from "react";
import getBusDriverDateData from "../../../3_Entities/admin/getBusDriverDateData";

const useGetBusDriverDate = (date) => {
  const [busDriverDateData, setBusDriverDateData] = useState([]);

  const fetchDateDriver = useCallback(async () => {
    try {
      const busDriverDateData = await getBusDriverDateData(date);
      setBusDriverDateData((prev) => [...prev, ...busDriverDateData]);
    } catch (error) {
      console.error("버스 기사 데이터를 가져오는 중 오류 발생:", error.message);
    }
  }, [date]);

  useEffect(() => {
    fetchDateDriver();
  }, [fetchDateDriver]);

  return { busDriverDateData };
};

export default useGetBusDriverDate;
