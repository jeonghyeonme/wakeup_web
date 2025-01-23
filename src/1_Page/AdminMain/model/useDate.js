import { useEffect, useState } from "react";

const useDate = () => {
  const [date, setDate] = useState();
  useEffect(() => {}, [date]);
  return [date, setDate];
};

export default useDate;
