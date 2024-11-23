import scheduleData from "../scheduleData";

const getTestData = (date, userIdx, time) => {
  // 날짜와 userIdx로 데이터 검색
  const dateData = scheduleData[date];
  if (!dateData) {
    return null; // 날짜 데이터가 없는 경우 null 반환
  }

  const userData = dateData[userIdx];
  if (!userData || userData.length === 0) {
    return null; // userIdx 데이터가 없는 경우 null 반환
  }

  const currentTime = new Date(`1970-01-01T${time}`).getTime();

  // 현재 시간 이후의 데이터 중 가장 가까운 데이터 찾기
  const filteredData = userData.filter((item) => {
    const itemTime = new Date(`1970-01-01T${item.time}`).getTime();
    return itemTime > currentTime; // 현재 시간 이후만 포함
  });

  if (filteredData.length === 0) {
    // 현재 날짜 데이터가 없으면 다음 날짜 데이터 확인
    const allDates = Object.keys(scheduleData).sort(); // 날짜 정렬
    const currentIndex = allDates.indexOf(date);
    if (currentIndex === -1 || currentIndex === allDates.length - 1) {
      return null; // 현재 날짜가 마지막 날짜거나 찾을 수 없으면 null 반환
    }

    // 다음 날짜 데이터 검색
    const nextDate = allDates[currentIndex + 1];
    const nextDateData = scheduleData[nextDate];
    if (
      !nextDateData ||
      !nextDateData[userIdx] ||
      nextDateData[userIdx].length === 0
    ) {
      return null; // 다음 날짜에 userIdx 데이터가 없는 경우 null 반환
    }

    // 다음 날짜의 첫 번째 데이터 반환
    return nextDateData[userIdx][0];
  }

  // 현재 날짜에서 가장 가까운 데이터 찾기
  const closest = filteredData.reduce((closest, item) => {
    const itemTime = new Date(`1970-01-01T${item.start_time}`).getTime();
    const closestTime = new Date(`1970-01-01T${closest.start_time}`).getTime();

    return itemTime < closestTime ? item : closest;
  });
  return closest; // 가장 가까운 데이터 반환
};

export default getTestData;
