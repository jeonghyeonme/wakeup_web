import loginTest from "./loginTest";
const BASE_URL = process.env.REACT_APP_API_URL || "https://api.example.com";
const isDevelopment = process.env.NODE_ENV === "development";

const postLogin = async (id, pw) => {
  if (isDevelopment) return loginTest(id, pw);

  try {
    const response = await fetch(`${BASE_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id, pw }),
    });

    if (!response.ok) {
      throw new Error("로그인 실패. 아이디와 비밀번호를 확인하세요.");
    }

    const data = await response.json();
    return data.token;
  } catch (error) {
    console.error("Login API Error:", error.message);
    throw error;
  }
};

export default postLogin;
