import { useEffect, useState } from "react";

const useManageDriverDate = (driverDateData, date) => {
  const [displayDriverDateData, setDisplayDriverDateData] = useState([]);

  useEffect(() => {
    const selectData = driverDateData.filter((item) => item.date === date);
    setDisplayDriverDateData(selectData);
  }, [driverDateData]);

  return { displayDriverDateData };
};

export default useManageDriverDate;
