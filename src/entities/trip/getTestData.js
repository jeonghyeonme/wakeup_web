import scheduleData from "../scheduleData";

const getTestData = (date, user_idx) => {
  if (!scheduleData[date]) {
    throw new Error("해당 날짜 데이터가 없습니다");
  }
  return scheduleData[date].filter((item) => item.userIdx === user_idx);
};
export default getTestData;
