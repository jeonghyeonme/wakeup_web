const regexPatterns = {
  id: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, // 이메일 형식

  password: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/, // 최소 8자, 문자+숫자 포함

  phone: /^01[0-9]{1}-[0-9]{3,4}-[0-9]{4}$/, // 한국 휴대전화번호 (010-xxxx-xxxx)

  company: /^[a-zA-Z가-힣\s]{2,}$/, // 회사 이름 (한글, 영어, 공백 허용)

  email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, // 일반 이메일
};

export default regexPatterns;
