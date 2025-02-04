import scheduleData from "../0_exampleData/scheduleData";

const findSchedulesByDate = (dateTime) => {
  // 날짜 비교를 위해 시간을 0으로 초기화하고 날짜만 비교
  const targetDate = new Date(dateTime.setHours(0, 0, 0, 0)); // 시간을 00:00:00으로 초기화

  const filteredSchedules = scheduleData.filter((item) => {
    const itemDate = new Date(item.start_time).setHours(0, 0, 0, 0); // 일정의 날짜만 비교
    return itemDate === targetDate.getTime();
  });

  return filteredSchedules;
};

export default findSchedulesByDate;
