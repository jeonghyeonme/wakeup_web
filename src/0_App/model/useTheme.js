import { setCookie } from "../../shared/cookie/cookie";
import useDarkAtom from "../../shared/recoil/useDarkAtom.js";
export const useThemeChangeEvent = (theme_dark) => {
  const [, setDarkEvent] = useDarkAtom();
  return () => {
    setDarkEvent(theme_dark);
    setCookie("theme", theme_dark, new Date(Date.now() + 86400e3));
  };
};
