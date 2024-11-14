import { atom, useSetRecoilState } from "recoil";
import { useRecoilValue, useRecoilState } from "recoil";

const dateAtom = atom({
  key: "date",
  default: "",
});

const useDateAtom = () => {
  const date = useRecoilValue(dateAtom);
  const setDate = useSetRecoilState(dateAtom);
  const setDateTypeEvent = (key) => {
    setDate(key);
  };

  return [date, setDateTypeEvent];
};
export default useDateAtom;
