import { atom, useSetRecoilState } from "recoil";
import { useRecoilValue, useRecoilState } from "recoil";

const checkAtom = atom({
  key: "LOGIN",
  default: false,
});

const useCheckAtom = () => {
  const check = useRecoilValue(checkAtom);
  const setCheck = useSetRecoilState(checkAtom);
  const setCheckTypeEvent = (key) => {
    setCheck(key);
  };

  return [check, setCheckTypeEvent];
};
export default useCheckAtom;
