const isDevelopment = process.env.NODE_ENV === "development";

const putScheduleAlert = async () => {
  // 개발상태일때는 true 반환
  if (isDevelopment) {
    console.log("개발 모드: 테스트 데이터를 반환합니다.");
    return true;
  }
  const response = await fetch("http://3.39.66.6:8000/account/login", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify({
      id: "test3",
      password: "1234",
    }),
  });
  const status = response.status;
  switch (status) {
    case 400:
      alert("입력 값 오류");
      break;
    case 409:
      alert("로그인 실패");
      break;
    case 200:
      const result = await response.json();
      console.log(result);
      break;
    default:
      console.log(response);
  }
};
export default putScheduleAlert;
