import scheduleData from "../0_exampleData/scheduleData";

// 1.	특정 날짜(date)와 사용자 인덱스(userIdx)를 기준으로 일정을 검색.
// 2.	특정 시간 이후의 가장 가까운 일정을 찾음.
// 3.	해당 날짜에 일정이 없으면 다음 날짜의 데이터를 확인.

// 후에 백엔드에서 작업 필요
const findUpcomingSchedule = (date, userIdx, time) => {
  // 날짜와 userIdx로 데이터 검색
  const dateData = scheduleData[date];
  if (!dateData) {
    return findNextAvailableDate(date, userIdx); // 날짜가 없으면 다음 날짜 확인
  }

  // 해당 userIdx의 일정 필터링
  const userData = dateData.filter((item) => item.userIdx === userIdx);
  if (userData.length === 0) {
    return findNextAvailableDate(date, userIdx); // userIdx 일정이 없으면 다음 날짜 확인
  }

  const currentTime = new Date(`1970-01-01T${time}:00Z`).getTime();

  // 현재 시간 이후의 데이터 필터링
  const filteredData = userData.filter((item) => {
    const itemTime = new Date(`1970-01-01T${item.start_time}`).getTime();
    return itemTime > currentTime;
  });

  // 현재 날짜에 일정이 없으면 다음 날짜 확인
  if (filteredData.length === 0) {
    return findNextAvailableDate(date, userIdx);
  }

  // 가장 가까운 일정 찾기
  return filteredData.reduce((closest, item) => {
    const itemTime = new Date(`1970-01-01T${item.start_time}`).getTime();
    const closestTime = new Date(`1970-01-01T${closest.start_time}`).getTime();
    return itemTime < closestTime ? item : closest;
  });
};

// 다음 날짜의 일정을 찾는 함수
const findNextAvailableDate = (currentDate, userIdx) => {
  const allDates = Object.keys(scheduleData).sort();
  const currentIndex = allDates.indexOf(currentDate);

  // 다음 날짜가 없으면 null 반환
  if (currentIndex === -1 || currentIndex === allDates.length - 1) {
    return null;
  }

  // 다음 날짜 탐색
  for (let i = currentIndex + 1; i < allDates.length; i++) {
    const nextDate = allDates[i];
    const nextDateData = scheduleData[nextDate].filter(
      (item) => item.userIdx === userIdx
    );

    if (nextDateData.length > 0) {
      // 다음 날짜의 첫 번째 일정 반환
      return nextDateData[0];
    }
  }

  return null; // 모든 날짜에 일정이 없으면 null 반환
};

export default findUpcomingSchedule;
