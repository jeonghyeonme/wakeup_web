import { useEffect } from "react";
import { useFetch } from "../../4_Shared/util/apiUtil";
import useAlertModalAtom from "../../4_Shared/Recoil/useAlertModalAtom";

const isDevelopment = process.env.NODE_ENV === "development";

const usePutAttendance = (idx, { onSuccess }) => {
  const [serverState, request] = useFetch();
  const [setAlert] = useAlertModalAtom();

  const putAttendance = async () => {
    if (isDevelopment) {
      onSuccess?.();
      return true;
    }

    await request("PUT", `/crew/attendace/schedule/${idx}`);
  };

  useEffect(() => {
    if (!serverState) return;

    switch (serverState.status) {
      case 400:
        setAlert("입력 값 오류");
        break;
      case 409:
        setAlert("로그인 실패");
        break;
      default:
        break;
    }
    setAlert("출석 체크 되었습니다.", () => {
      onSuccess?.();
    });
  }, [serverState]);

  return [putAttendance];
};

export default usePutAttendance;
