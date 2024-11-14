const getTestData = (date) => {
  return testData.filter((userData) => userData.date === date);
};

export default getTestData;

const testData = [
  // 11월 14일 데이터
  {
    date: "2024-11-14",
    time: "09:00",
    driver: { name: "김만덕", phone: "010-1234-1234" },
    wakeup: true,
  },
  {
    date: "2024-11-14",
    time: "11:00",
    driver: { name: "박철수", phone: "010-5678-1234" },
    wakeup: false,
  },
  {
    date: "2024-11-14",
    time: "13:00",
    driver: { name: "이영희", phone: "010-8765-4321" },
    wakeup: true,
  },
  {
    date: "2024-11-14",
    time: "15:30",
    driver: { name: "최지은", phone: "010-4321-5678" },
    wakeup: false,
  },
  {
    date: "2024-11-14",
    time: "18:00",
    driver: { name: "정민수", phone: "010-5555-6666" },
    wakeup: true,
  },

  // 11월 15일 데이터
  {
    date: "2024-11-15",
    time: "08:00",
    driver: { name: "김지호", phone: "010-1234-5678" },
    wakeup: true,
  },
  {
    date: "2024-11-15",
    time: "10:00",
    driver: { name: "한승우", phone: "010-8765-1234" },
    wakeup: false,
  },
  {
    date: "2024-11-15",
    time: "12:30",
    driver: { name: "박소현", phone: "010-9876-5432" },
    wakeup: true,
  },
  {
    date: "2024-11-15",
    time: "14:45",
    driver: { name: "이준혁", phone: "010-6543-9876" },
    wakeup: false,
  },
  {
    date: "2024-11-15",
    time: "17:20",
    driver: { name: "최영진", phone: "010-3456-7890" },
    wakeup: true,
  },

  // 11월 16일 데이터
  {
    date: "2024-11-16",
    time: "07:30",
    driver: { name: "박하영", phone: "010-7890-1234" },
    wakeup: true,
  },
  {
    date: "2024-11-16",
    time: "09:15",
    driver: { name: "김수현", phone: "010-4567-8910" },
    wakeup: false,
  },
  {
    date: "2024-11-16",
    time: "12:00",
    driver: { name: "이동건", phone: "010-7891-2345" },
    wakeup: true,
  },
  {
    date: "2024-11-16",
    time: "14:00",
    driver: { name: "정하윤", phone: "010-5678-9101" },
    wakeup: false,
  },
  {
    date: "2024-11-16",
    time: "17:00",
    driver: { name: "오지석", phone: "010-6789-1011" },
    wakeup: true,
  },

  // 11월 17일 데이터
  {
    date: "2024-11-17",
    time: "08:10",
    driver: { name: "조은비", phone: "010-8901-2345" },
    wakeup: true,
  },
  {
    date: "2024-11-17",
    time: "10:20",
    driver: { name: "차영호", phone: "010-1234-5670" },
    wakeup: false,
  },
  {
    date: "2024-11-17",
    time: "13:00",
    driver: { name: "윤민재", phone: "010-3456-7891" },
    wakeup: true,
  },
  {
    date: "2024-11-17",
    time: "15:30",
    driver: { name: "송하늘", phone: "010-4567-8923" },
    wakeup: false,
  },
  {
    date: "2024-11-17",
    time: "18:45",
    driver: { name: "백지성", phone: "010-9876-5431" },
    wakeup: true,
  },

  // 11월 18일 데이터
  {
    date: "2024-11-18",
    time: "07:45",
    driver: { name: "고명준", phone: "010-1234-6789" },
    wakeup: true,
  },
  {
    date: "2024-11-18",
    time: "10:00",
    driver: { name: "하영은", phone: "010-4567-8901" },
    wakeup: false,
  },
  {
    date: "2024-11-18",
    time: "12:30",
    driver: { name: "문도윤", phone: "010-6789-0123" },
    wakeup: true,
  },
  {
    date: "2024-11-18",
    time: "15:10",
    driver: { name: "양지훈", phone: "010-7890-1234" },
    wakeup: false,
  },
  {
    date: "2024-11-18",
    time: "17:50",
    driver: { name: "이서현", phone: "010-8901-2345" },
    wakeup: true,
  },

  // 11월 19일 데이터
  {
    date: "2024-11-19",
    time: "08:00",
    driver: { name: "류도현", phone: "010-2345-6789" },
    wakeup: true,
  },
  {
    date: "2024-11-19",
    time: "10:15",
    driver: { name: "박소연", phone: "010-5678-9012" },
    wakeup: false,
  },
  {
    date: "2024-11-19",
    time: "12:45",
    driver: { name: "정지훈", phone: "010-6789-0123" },
    wakeup: true,
  },
  {
    date: "2024-11-19",
    time: "14:30",
    driver: { name: "최은지", phone: "010-7890-1234" },
    wakeup: false,
  },
  {
    date: "2024-11-19",
    time: "18:00",
    driver: { name: "홍준표", phone: "010-8901-2345" },
    wakeup: true,
  },

  // 11월 20일 데이터
  {
    date: "2024-11-20",
    time: "09:00",
    driver: { name: "이정우", phone: "010-1234-5678" },
    wakeup: true,
  },
  {
    date: "2024-11-20",
    time: "11:30",
    driver: { name: "김하늘", phone: "010-2345-6789" },
    wakeup: false,
  },
  {
    date: "2024-11-20",
    time: "14:00",
    driver: { name: "유지호", phone: "010-5678-9012" },
    wakeup: true,
  },
  {
    date: "2024-11-20",
    time: "16:15",
    driver: { name: "박상훈", phone: "010-6789-0123" },
    wakeup: false,
  },
  {
    date: "2024-11-20",
    time: "18:30",
    driver: { name: "송민호", phone: "010-7890-1234" },
    wakeup: true,
  },
];
