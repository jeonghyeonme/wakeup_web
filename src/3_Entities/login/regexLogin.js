const regexData = (id, pw) => {
  // 정규식 정의
  const idRegex = /^[a-zA-Z0-9_-]{5,15}$/; // ID: 영문, 숫자, 언더스코어, 하이픈 허용. 5~15자
  const pwRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,20}$/;
  // PW: 영문, 숫자, 특수문자 조합. 8~20자

  // 검증
  if (!idRegex.test(id)) {
    throw new Error(
      "ID는 5~15자의 영문, 숫자, 언더스코어(_), 하이픈(-)만 허용됩니다."
    );
  }

  if (!pwRegex.test(pw)) {
    throw new Error("비밀번호는 6~20자의 영문, 숫자를 조합해야 합니다.");
  }

  // 검증 성공 시 true 반환
  return true;
};

export default regexData;
