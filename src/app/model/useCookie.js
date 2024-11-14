import { setCookie, getCookie } from "../../shared/cookie/cookie";
import { useThemeChangeEvent } from "./useTheme";
export const useInitCookie = () => {
  const themeIsDark = getCookie("theme");
  const themeChangeEvent = useThemeChangeEvent(themeIsDark);
  if (themeIsDark != null) {
    setCookie("theme", themeIsDark, new Date(Date.now() + 86400e3));
    themeChangeEvent();
  } else {
    setCookie("theme", false, new Date(Date.now() + 86400e3));
    themeChangeEvent(false); // 기본 테마로 변경
  }
};
