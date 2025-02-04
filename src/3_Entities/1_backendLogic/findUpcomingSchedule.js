import scheduleData from "../0_exampleData/scheduleData";

// 특정 날짜와 사용자 인덱스(userIdx)를 기준으로 가장 가까운 일정을 찾는 함수
const findUpcomingSchedule = (dateTime, userIdx) => {
  const date = dateTime.toISOString().split("T")[0]; // "YYYY-MM-DD" 추출
  const currentTime = new Date(dateTime).getTime();

  let upcomingSchedule = findScheduleForDate(date, userIdx, currentTime);

  // 해당 날짜에 일정이 없으면 다음 가능한 날짜 탐색
  if (!upcomingSchedule) {
    upcomingSchedule = findNextAvailableSchedule(date, userIdx);
  }

  return upcomingSchedule;
};

// 특정 날짜(date)와 사용자 인덱스(userIdx)를 기준으로 현재 시간 이후 가장 가까운 일정 찾기
const findScheduleForDate = (date, userIdx, currentTime) => {
  const dateData = scheduleData[date];
  if (!dateData) return null; // 해당 날짜에 데이터가 없으면 null 반환

  // 해당 userIdx의 일정 필터링 후, 현재 시간 이후의 일정만 추출
  const filteredData = dateData.filter(
    (item) =>
      item.userIdx === userIdx &&
      new Date(item.start_time).getTime() > currentTime
  );

  // 가장 가까운 일정 반환 (없으면 null)
  return filteredData.length > 0
    ? filteredData.reduce((closest, item) => {
        return new Date(item.start_time).getTime() <
          new Date(closest.start_time).getTime()
          ? item
          : closest;
      })
    : null;
};

// 현재 날짜 이후의 다음 가능한 일정을 찾는 함수
const findNextAvailableSchedule = (currentDate, userIdx) => {
  const allDates = Object.keys(scheduleData).sort();
  const currentIndex = allDates.indexOf(currentDate);

  if (currentIndex === -1 || currentIndex === allDates.length - 1) return null; // 날짜 범위를 벗어난 경우

  // 현재 날짜 이후의 일정 탐색
  for (let i = currentIndex + 1; i < allDates.length; i++) {
    const nextDate = allDates[i];
    const nextDateData = scheduleData[nextDate].filter(
      (item) => item.userIdx === userIdx
    );

    if (nextDateData.length > 0) {
      // 다음 날짜의 첫 번째 일정 반환
      return nextDateData.reduce((closest, item) => {
        return new Date(item.start_time).getTime() <
          new Date(closest.start_time).getTime()
          ? item
          : closest;
      });
    }
  }

  return null; // 모든 날짜에 일정이 없으면 null 반환
};

export default findUpcomingSchedule;
