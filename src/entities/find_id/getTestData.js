import memberData from "../memberData";

const getTestData = (name, phone, company) => {
  const data = memberData;
  const foundItem = data.find(
    (item) =>
      item.name === name && item.phone === phone && item.company === company
  );
  if (!foundItem) {
    throw new Error("잘못된 입력");
  }

  return foundItem.id;
};

export default getTestData;
