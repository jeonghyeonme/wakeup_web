import memberData from "../memberData";

const getTestData = (name, phone, company) => {
  const data = memberData;
  const foundItem = data.find(
    (item) =>
      item.driver.name === name &&
      item.driver.phone === phone &&
      item.driver.company === company
  );
  if (!foundItem) {
    throw new Error("잘못된 입력");
  }

  return data.id;
};

export default getTestData;
