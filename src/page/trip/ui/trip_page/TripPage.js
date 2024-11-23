import React, { useEffect } from "react";
import { PageContainer, CardList } from "./style";
import TripCard from "../trip_card/TripCard";
import Header from "../header/header";
import useDateAtom from "../../../../shared/recoil/useDateAtom";
import useGetTripData from "../../../../entities/trip/useGetTripData";
import { getCookie } from "../../../../shared/cookie/cookie";
import NonScheduleWidget from "../../../../widget/non_schedule/ui/NonSchedule";

const TripPage = () => {
  const [date] = useDateAtom();
  const [tripData, fetchData] = useGetTripData();
  const cookieData = getCookie("user_data");

  useEffect(() => {
    fetchData(date, cookieData.user_idx);
  }, [date]);

  useEffect(() => {
    console.log(tripData);
  }, [tripData]);

  return (
    <PageContainer>
      <Header />
      <CardList>
        {tripData?.length === 0 && <NonScheduleWidget />}
        {tripData?.map((schedule) => (
          <TripCard
            title={schedule.title}
            start={schedule.start_time}
            end={schedule.end_time}
            duration={schedule.duration}
          />
        ))}
      </CardList>
    </PageContainer>
  );
};

export default TripPage;
