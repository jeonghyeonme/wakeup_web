import { useState, useEffect } from "react";

const useManageTime = (scheduleTime, presentFormattedTime) => {
  const [remainingTime, setRemainingTime] = useState(0);

  useEffect(() => {
    if (!scheduleTime || !presentFormattedTime) {
      setRemainingTime(0); // 스케줄 시간이나 현재 시간이 없으면 0초로 설정
      return;
    }

    // 남은 시간을 초 단위로 계산
    const calculateRemainingTime = () => {
      const currentTimestamp = new Date(
        `1970-01-01T${presentFormattedTime}`
      ).getTime();
      const scheduleTimestamp = new Date(
        `1970-01-01T${scheduleTime}`
      ).getTime();
      const diff = Math.max(0, scheduleTimestamp - currentTimestamp); // 음수 방지
      return Math.floor(diff / 1000); // 초 단위 반환
    };

    setRemainingTime(calculateRemainingTime());

    // 타이머 시작
    const timer = setInterval(() => {
      setRemainingTime((prevTime) => {
        if (prevTime <= 0) {
          clearInterval(timer); // 시간이 0이 되면 타이머 종료
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer); // 컴포넌트가 언마운트되면 타이머 정리
  }, [scheduleTime, presentFormattedTime]);

  // 초를 시, 분, 초로 포맷
  const formattedTime =
    remainingTime > 0
      ? `${Math.floor(remainingTime / 3600)
          .toString()
          .padStart(2, "0")}:${Math.floor((remainingTime % 3600) / 60)
          .toString()
          .padStart(2, "0")}:${(remainingTime % 60)
          .toString()
          .padStart(2, "0")}`
      : "00:00:00";

  return [formattedTime];
};

export default useManageTime;
