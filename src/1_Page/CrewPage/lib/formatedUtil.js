// 날짜 포맷 함수
export const formatDateTime = (dateTimeString) => {
  const date = new Date(dateTimeString);
  const options = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false, // 24시간 형식 사용
  };

  return date.toLocaleString("ko-KR", options);
};
