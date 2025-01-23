import { useEffect, useState } from "react";

const useManageBusScheduleData = (driverDateData) => {
  const [displayBusScheduleData, setDisplayBusScheduleData] = useState([]);

  useEffect(() => {
    setDisplayBusScheduleData(driverDateData);
  }, [driverDateData]);

  return { displayBusScheduleData };
};

export default useManageBusScheduleData;
