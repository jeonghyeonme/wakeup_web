import useBusUserData from "../../../entities/admin/useBusUserData";
const useBusUser = () => {
  const [busUserData, error, fetchData] = useBusUserData();

  return [busUserData, error, fetchData];
};

export default useBusUser;
