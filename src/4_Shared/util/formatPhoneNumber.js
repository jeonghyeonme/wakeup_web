// 정규식 기반 전화번호 자동 포맷팅
const formatPhoneNumber = (event, setValue) => {
  let value = event.target.value.replace(/\D/g, ""); // 숫자만 남김
  if (value.length >= 3 && value.length <= 7) {
    value = value.replace(/(\d{3})(\d+)/, "010-$2"); // 첫 3자리
  } else if (value.length > 7) {
    value = value.replace(/(\d{3})(\d{4})(\d{4})/, "010-$2-$3"); // 완전한 포맷
  }
  setValue("phone", value); // 폼의 전화번호 값 업데이트
};
export default formatPhoneNumber;
