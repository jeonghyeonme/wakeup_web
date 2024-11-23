import { useState, useEffect } from "react";
import getTestData from "./getTestData";
import regexLoginData from "./regexLogin";

const loginEvent = async (input_id, input_pw) => {
  // get은 {} 오브젝트 필요없음
  // post나 put 은 {} 오브젝트 필요함
  // 아래가 기본양식임
  const response = await fetch("http://XXX", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: input_id,
      password: input_pw,
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

const useLogin = () => {
  const [userIdx, setUserIdx] = useState(null);

  const fetchData = async (id, pw) => {
    try {
      regexLoginData(id, pw);
      //   const data = await loginEvent(id, pw); 후에 데이터를 실제로 넣을 경우를 위해
      const data = getTestData(id, pw);
      setUserIdx(data);
    } catch (error) {
      alert(error);
    }
  };

  return [userIdx, setUserIdx, fetchData];
};

export default useLogin;
