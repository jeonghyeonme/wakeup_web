import React, { useMemo, useState } from "react";
import STYLE from "./style";

import TripCard from "./ui/TripCard";
import Header from "./ui/Header";
import useGetTripData from "../../3_Entities/Trip/useGetTripData";
import NonScheduleWidget from "../../2_Widget/NonSchedule";

const TripPage = () => {
  const today = useMemo(() => new Date(), []);
  const [date, setDate] = useState(today);
  const [tripData] = useGetTripData(date);

  return (
    <STYLE.PageContainer>
      <Header date={date} setDate={setDate} />
      <STYLE.CardList>
        {tripData?.length === 0 && <NonScheduleWidget />}
        {tripData?.map((schedule) => (
          <TripCard date={date} schedule={schedule} />
        ))}
      </STYLE.CardList>
    </STYLE.PageContainer>
  );
};

export default TripPage;
