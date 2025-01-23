import memberData from "../0_exampleData/memberData";

const isDevelopment = process.env.NODE_ENV === "development";
const TEST_TOKEN = process.env.REACT_APP_API_TOKEN;

const getRandomMember = (memberData) => {
  if (!Array.isArray(memberData) || memberData.length === 0) {
    throw new Error("유효한 배열을 전달해야 합니다.");
  }

  const randomIndex = Math.floor(Math.random() * memberData.length);
  return memberData[randomIndex];
};

const getMyInfo = async (date, userIdx, time) => {
  if (isDevelopment) {
    // 개발 모드에서는 테스트 데이터를 반환
    console.log("개발 모드: 테스트 데이터를 반환합니다.");
    return getRandomMember(memberData);
  }

  try {
    const response = await fetch("http://XXX/api/getSchedule", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${TEST_TOKEN}`, // 토큰 추가
      },
      body: JSON.stringify({ date, userIdx, time }),
    });

    // 상태 코드 확인
    if (!response.ok) {
      const status = response.status;
      switch (status) {
        case 400:
          throw new Error("입력 값 오류: 요청 형식이 잘못되었습니다.");
        case 401:
          throw new Error("인증 실패: 유효한 토큰이 필요합니다.");
        case 403:
          throw new Error("권한 없음: 접근 권한이 없습니다.");
        case 404:
          throw new Error("데이터 없음: 요청한 정보를 찾을 수 없습니다.");
        case 409:
          throw new Error("중복 데이터: 이미 존재하는 일정입니다.");
        default:
          throw new Error(`서버 오류 발생: 상태 코드 ${status}`);
      }
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error("네트워크 또는 서버 오류:", error.message);
    return null;
  }
};

export default getMyInfo;
