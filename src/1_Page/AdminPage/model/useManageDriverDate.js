import { useEffect, useState } from "react";

const useManageDriverDate = (driverDateData) => {
  const [displayTimeEnoughDriverDateData, setDisplayTimeEnoughDriverDateData] =
    useState([]);
  const [displayTimeOverDriverDateData, setDisplayTimeOverDriverDateData] =
    useState([]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      updateDriverData();
    }, 60000); // 1분마다 호출

    updateDriverData(); // 초기 실행
    return () => clearInterval(intervalId); // 언마운트 시 정리
  }, [driverDateData]);

  const updateDriverData = () => {
    const now = new Date(); // 현재 시간
    const currentTime = now.getHours() * 60 + now.getMinutes(); // 현재 시간을 분 단위로 변환

    const enoughTimeData = [];
    const overTimeData = [];

    driverDateData.forEach((item) => {
      const [hour, minute] = item.time.split(":").map(Number);
      const itemTimeInMinutes = hour * 60 + minute;

      // 현재 시간보다 이전 데이터는 삭제 (필터링하지 않음)
      if (itemTimeInMinutes < currentTime) {
        return;
      }

      // 시간 차 계산
      const timeDifference = itemTimeInMinutes - currentTime;

      if (timeDifference <= 30) {
        overTimeData.push(item); // 30분 이하의 데이터
      } else {
        enoughTimeData.push(item); // 그 외의 데이터
      }
    });

    // 상태 업데이트
    setDisplayTimeEnoughDriverDateData((prev) => {
      if (JSON.stringify(prev) !== JSON.stringify(enoughTimeData)) {
        return enoughTimeData;
      }
      return prev;
    });

    setDisplayTimeOverDriverDateData((prev) => {
      if (JSON.stringify(prev) !== JSON.stringify(overTimeData)) {
        return overTimeData;
      }
      return prev;
    });
  };

  return [displayTimeEnoughDriverDateData, displayTimeOverDriverDateData];
};

export default useManageDriverDate;
