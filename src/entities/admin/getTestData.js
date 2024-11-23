import testData from "../adminTestData";

const getTestData = (date) => {
  console.log(testData.filter((userData) => userData.date === date));
  return testData.filter((userData) => userData.date === date);
};

export default getTestData;
