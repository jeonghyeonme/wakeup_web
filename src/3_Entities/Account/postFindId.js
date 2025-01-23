const isDevelopment = process.env.NODE_ENV === "development";
const TEST_TOKEN = process.env.REACT_APP_API_TOKEN;

const postFindId = async (data) => {
  if (isDevelopment) return 123;

  try {
    const response = await fetch("http://XXX/api/getSchedule", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${TEST_TOKEN}`, // 토큰 추가
      },
      body: JSON.stringify({ data }),
    });

    if (!response.ok) {
      throw new Error(response.status);
    }

    return response;
  } catch (error) {
    throw new Error(error.message);
  }
};

export default postFindId;
