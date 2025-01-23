import memberData from "../0_exampleData/memberData";
const loginTest = (id, pw) => {
  // 테스트 목적으로 id와 pw를 기반으로 user_idx를 생성

  // 데이터베이스에서 id와 pw가 일치하는 사용자 검색
  const user = memberData.find(
    (user) => user.id === id && user.password === pw
  );

  if (user) {
    return user;
  } else {
    throw new Error("사용자 인증 실패");
  }
};

export default loginTest;
