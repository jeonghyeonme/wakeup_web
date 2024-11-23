const regexData = (id, phone, company) => {
  // 정규식 정의
  const idRegex = /^[a-zA-Z0-9_-]{5,15}$/; // ID: 영문, 숫자, 언더스코어, 하이픈 허용. 5~15자
  const phoneRegex = /^010-\d{4}-\d{4}$/; // 전화번호: 010-XXXX-XXXX 형식
  const companyRegex = /^[a-zA-Z가-힣0-9\s]{2,20}$/; // 회사명: 영문, 한글, 숫자, 공백 포함 2~20자

  // 검증
  if (!idRegex.test(id)) {
    throw new Error(
      "ID는 5~15자의 영문, 숫자, 언더스코어(_), 하이픈(-)만 허용됩니다."
    );
  }

  if (!phoneRegex.test(phone)) {
    throw new Error("전화번호는 010-XXXX-XXXX 형식이어야 합니다.");
  }

  if (!companyRegex.test(company)) {
    throw new Error("회사명은 2~20자의 영문, 한글, 숫자, 공백만 허용됩니다.");
  }

  // 검증 성공 시 true 반환
  return true;
};

export default regexData;
