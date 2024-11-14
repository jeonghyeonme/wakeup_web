import { useEffect } from "react";
import useBusUser from "../../model/useBusUser";
import UserBox from "../user_box/UserBox";
import { UserContainer } from "./style";
import useDateAtom from "../../../../shared/recoil/useDateAtom";
import NonScheduleWidget from "../../../../widget/non_schedule/ui/NonSchedule";

const UserShape = () => {
  const [date] = useDateAtom();
  const [busUserData, error, fetchData] = useBusUser();
  useEffect(() => {
    console.log("데이트", date);
    fetchData(date);
  }, [date]);

  if (error) {
    return <div>데이터를 불러오는 중 오류가 발생했습니다.</div>;
  }

  if (busUserData.length === 0) return <NonScheduleWidget />;
  return (
    <>
      <UserContainer>
        {busUserData.map((busUser) => (
          <UserBox
            driver={busUser.driver}
            wakeup={busUser.wakeup}
            time={busUser.time}
            date={busUser.date}
          />
        ))}
      </UserContainer>
    </>
  );
};

export default UserShape;
