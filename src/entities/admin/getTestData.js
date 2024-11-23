import testData from "../testData";

const getTestData = (date) => {
  return testData.filter((userData) => userData.date === date);
};

export default getTestData;
