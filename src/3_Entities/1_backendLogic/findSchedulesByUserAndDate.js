import scheduleData from "../0_exampleData/scheduleData";

const findSchedulesByUserAndDate = (userIdx, dateTime) => {
  const targetDate = new Date(dateTime).toISOString().split("T")[0]; // YYYY-MM-DD 추출

  // 해당 날짜와 userIdx에 맞는 일정 필터링
  const filteredSchedules = scheduleData.filter((item) => {
    const itemDate = new Date(item.start_time).toISOString().split("T")[0]; // 일정의 날짜 추출
    return itemDate === targetDate && item.driver.userIdx === userIdx;
  });

  return filteredSchedules;
};
export default findSchedulesByUserAndDate;
