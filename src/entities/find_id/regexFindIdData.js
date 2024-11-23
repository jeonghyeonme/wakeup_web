const regexData = (name, phone, company) => {
  // 정규식 정의
  const nameRegex = /^[가-힣]{2,5}$/; // 이름: 한글 2~5자
  const phoneRegex = /^010-\d{4}-\d{4}$/; // 전화번호: 010-XXXX-XXXX 형식
  const companyRegex = /^[a-zA-Z가-힣0-9\s]{2,20}$/; // 회사명: 영문, 한글, 숫자, 공백 포함 2~20자

  // 검증
  if (!nameRegex.test(name)) {
    throw new Error("이름은 2~5자의 한글이어야 합니다.");
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
