const getTestData = (id, pw) => {
  // 테스트 목적으로 id와 pw를 기반으로 user_idx를 생성
  const mockDatabase = [
    {
      id: "shopper1",
      type: "admin",
      password: "shop123",
      user_idx: 201,
      name: "김지우",
      phone: "010-1234-5678",
      company: "ABC Corp",
      home: "서울시 강남구",
    },
    {
      id: "shopper2",
      type: "crew",
      password: "sell456",
      user_idx: 202,
      name: "박성훈",
      phone: "010-2345-6789",
      company: "XYZ Inc",
      home: "서울시 서초구",
    },
    {
      id: "admin1",
      type: "crew",
      password: "admin789",
      user_idx: 203,
      name: "김태리",
      phone: "010-3456-7890",
      company: "DEF Ltd",
      home: "서울시 송파구",
    },
  ];

  // 데이터베이스에서 id와 pw가 일치하는 사용자 검색
  const user = mockDatabase.find(
    (user) => user.id === id && user.password === pw
  );

  if (user) {
    return user;
  } else {
    throw new Error("사용자 인증 실패");
  }
};

export default getTestData;
