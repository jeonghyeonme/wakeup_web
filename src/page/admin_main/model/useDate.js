import { useEffect, useState } from "react";

const useDate = () => {
  const [date, setDate] = useState();
  useEffect(() => {
    console.log(date);
  }, [date]);
  return [date, setDate];
};

export default useDate;
