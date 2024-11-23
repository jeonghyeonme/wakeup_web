import memberData from "../memberData";

const getTestData = (id, phone, company) => {
  const data = memberData;
  const foundItem = data.find(
    (item) => item.id === id && item.phone === phone && item.company === company
  );
  if (!foundItem) {
    throw new Error("잘못된 입력");
  }

  return foundItem.password;
};

export default getTestData;
