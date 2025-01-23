import { useState, useEffect } from "react";
import clickTestData from "./clickTestData";

const clickAlertEvent = async () => {
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
  }
  console.log(status);
  const result = await response.json();
  console.log(result);
};

const useClickAlert = () => {
  const [clickAlert, setClickAlert] = useState(null);
  const fetchData = async (busScheduleData) => {
    try {
      console.log();
      //   const data = await clickAlertEvent(); 후에 데이터를 실제로 넣을 경우를 위해
      const data = clickTestData();
      setClickAlert(data);
      alert(`${busScheduleData.start_time} 배차 출석완료`);
    } catch (error) {
      alert(error);
    }
  };

  return [clickAlert, fetchData];
};

export default useClickAlert;
