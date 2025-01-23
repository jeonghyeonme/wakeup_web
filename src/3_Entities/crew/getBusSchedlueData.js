import findUpcomingSchedule from "./findUpcomingSchedule";
const isDevelopment = process.env.NODE_ENV === "development";

const getBusScheduleData = async (date, userIdx, time) => {
  if (isDevelopment) {
    // 개발 모드에서는 테스트 데이터를 반환
    console.log("개발 모드: 테스트 데이터를 반환합니다.", date, userIdx, time);
    return findUpcomingSchedule("2024-11-20", userIdx, "14:00");
  }
  try {
    const response = await fetch("http://XXX", { date });
    const status = response.status;

    // 상태 코드에 따른 처리
    if (!response.ok) {
      switch (status) {
        case 400:
          console.log("입력 값 오류");
          break;
        case 409:
          console.log("중복임");
          break;
        default:
          console.log("서버 오류 발생");
      }
      return; // 에러 발생 시 이후 처리 중단
    }
    const result = await response.json();
    return result;
  } catch (error) {
    console.log("네트워크 또는 서버 오류:", error);
  }
};
export default getBusScheduleData;
