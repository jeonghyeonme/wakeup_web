import React, { useEffect } from "react";
import { PageContainer, CardList } from "./style";
import TripCard from "../trip_card/TripCard";
import Header from "../header/header";
import useDateAtom from "../../../../shared/recoil/useDateAtom";
import useGetTripData from "../../../../entities/trip/useGetTripData";
import { getCookie } from "../../../../shared/cookie/cookie";

const scheduleData = [
  {
    id: 1,
    title: "인천 TO 마포",
    start: "12:40",
    end: "01:40",
    duration: "01:30",
  },
  {
    id: 2,
    title: "마포 TO 동탄",
    start: "15:40",
    end: "01:40",
    duration: "01:30",
  },
  {
    id: 3,
    title: "동탄 TO 인천",
    start: "17:40",
    end: "01:40",
    duration: "01:30",
  },
  {
    id: 3,
    title: "동탄 TO 인천",
    start: "17:40",
    end: "01:40",
    duration: "01:30",
  },
  {
    id: 3,
    title: "동탄 TO 인천",
    start: "17:40",
    end: "01:40",
    duration: "01:30",
  },
  {
    id: 3,
    title: "동탄 TO 인천",
    start: "17:40",
    end: "01:40",
    duration: "01:30",
  },
];

const TripPage = () => {
  const [date] = useDateAtom();
  const [tripData, error, fetchData] = useGetTripData();
  const cookieData = getCookie("user_data");

  useEffect(() => {
    fetchData(cookieData.user_idx);
  }, [date]);

  return (
    <PageContainer>
      <Header />
      <CardList>
        {scheduleData.map((schedule) => (
          <TripCard
            title={schedule.title}
            start={schedule.start}
            end={schedule.end}
            duration={schedule.duration}
          />
        ))}
      </CardList>
    </PageContainer>
  );
};

export default TripPage;
