import scheduleData from "../0_exampleData/scheduleData";

// 특정 날짜와 사용자 인덱스(userIdx)를 기준으로 가장 가까운 일정을 찾는 함수
const findUpcomingSchedule = (dateTime) => {
  const currentTime = new Date(dateTime).getTime();

  // 현재 시간 이후의 모든 일정 필터링
  const upcomingSchedules = scheduleData
    .filter((item) => new Date(item.start_time).getTime() > currentTime)
    .sort(
      (a, b) =>
        new Date(a.start_time).getTime() - new Date(b.start_time).getTime()
    );

  // 가장 가까운 일정 반환 (없으면 null)
  return upcomingSchedules.length > 0 ? upcomingSchedules[0] : null;
};

export default findUpcomingSchedule;
