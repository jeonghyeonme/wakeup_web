const isDevelopment = process.env.NODE_ENV === "development";
const TEST_TOKEN = process.env.REACT_APP_API_TOKEN;

const postFindId = async (data) => {
  let message;
  if (isDevelopment) return { sucsess: true, result: "123", message };

  try {
    const response = await fetch("http://XXX/api/getSchedule", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${TEST_TOKEN}`, // 토큰 추가
      },
      body: JSON.stringify({ data }),
    });

    if (response.ok) {
      return await response.json();
    }

    if (response.status === 404) {
      message = "등록된 이메일이 없습니다.";
    } else if (response.status === 500) {
      message = "서버 오류가 발생했습니다. 잠시 후 다시 시도해주세요.";
    } else {
      message = "알 수 없는 오류가 발생했습니다.";
    }

    return { sucesss: true, result: response, message };
  } catch (error) {
    return null;
  }
};

export default postFindId;
