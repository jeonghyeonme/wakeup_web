const sampleData = {
  "2024-11-20": {
    이지우: [
      { time: "08:30", attendanc: true },
      { time: "09:00", attendanc: false },
      { time: "09:30", attendanc: true },
      { time: "10:00", attendanc: true },
      { time: "11:30", attendanc: false },
    ],
    김민준: [
      { time: "07:00", attendanc: false },
      { time: "08:15", attendanc: false },
      { time: "09:45", attendanc: true },
      { time: "10:30", attendanc: true },
      { time: "12:00", attendanc: false },
    ],
  },
  "2024-11-21": {
    이지우: [
      { time: "07:15", attendanc: false },
      { time: "08:50", attendanc: true },
      { time: "10:00", attendanc: true },
      { time: "12:30", attendanc: false },
      { time: "14:00", attendanc: true },
    ],
    김민준: [
      { time: "06:50", attendanc: true },
      { time: "07:45", attendanc: false },
      { time: "09:20", attendanc: true },
      { time: "11:15", attendanc: false },
      { time: "13:40", attendanc: true },
    ],
  },
  "2024-11-22": {
    이지우: [
      { time: "06:30", attendanc: true },
      { time: "08:00", attendanc: false },
      { time: "09:45", attendanc: true },
      { time: "11:20", attendanc: false },
      { time: "13:00", attendanc: true },
    ],
    김민준: [
      { time: "07:00", attendanc: false },
      { time: "09:10", attendanc: true },
      { time: "10:25", attendanc: false },
      { time: "12:15", attendanc: true },
      { time: "14:30", attendanc: true },
    ],
  },
  "2024-11-23": {
    이지우: [
      { time: "07:10", attendanc: true },
      { time: "08:30", attendanc: false },
      { time: "10:00", attendanc: true },
      { time: "11:50", attendanc: true },
      { time: "13:40", attendanc: false },
      { time: "18:40", attendanc: false },
      { time: "19:40", attendanc: false },
      { time: "20:40", attendanc: false },
      { time: "21:40", attendanc: false },
    ],
    김민준: [
      { time: "06:00", attendanc: false },
      { time: "07:45", attendanc: true },
      { time: "09:00", attendanc: true },
      { time: "10:35", attendanc: false },
      { time: "12:50", attendanc: true },
    ],
  },
};
const getTestData = (date, name, time) => {
  // 날짜와 이름으로 데이터 검색
  const dateData = sampleData[date];
  if (!dateData) {
    return null; // 날짜 데이터가 없는 경우 null 반환
  }

  const nameData = dateData[name];
  if (!nameData || nameData.length === 0) {
    return null; // 이름 데이터가 없는 경우 null 반환
  }

  const currentTime = new Date(`1970-01-01T${time}`).getTime();

  // 현재 시간 이후의 데이터 중 가장 가까운 데이터 찾기
  const filteredData = nameData.filter((item) => {
    const itemTime = new Date(`1970-01-01T${item.time}`).getTime();
    return itemTime > currentTime; // 현재 시간 이후만 포함
  });

  if (filteredData.length === 0) {
    // 현재 날짜 데이터가 없으면 다음 날짜 데이터 확인
    const allDates = Object.keys(sampleData).sort(); // 날짜 정렬
    const currentIndex = allDates.indexOf(date);
    if (currentIndex === -1 || currentIndex === allDates.length - 1) {
      return null; // 현재 날짜가 마지막 날짜거나 찾을 수 없으면 null 반환
    }

    // 다음 날짜 데이터 검색
    const nextDate = allDates[currentIndex + 1];
    const nextDateData = sampleData[nextDate];
    if (
      !nextDateData ||
      !nextDateData[name] ||
      nextDateData[name].length === 0
    ) {
      return null; // 다음 날짜에 이름 데이터가 없는 경우 null 반환
    }

    // 다음 날짜의 첫 번째 데이터 반환
    return nextDateData[name][0];
  }

  // 현재 날짜에서 가장 가까운 데이터 찾기
  const closest = filteredData.reduce((closest, item) => {
    const itemTime = new Date(`1970-01-01T${item.time}`).getTime();
    const closestTime = new Date(`1970-01-01T${closest.time}`).getTime();

    return itemTime < closestTime ? item : closest;
  });
  return closest; // 가장 가까운 데이터 반환
};

export default getTestData;
