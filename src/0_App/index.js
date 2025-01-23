import Page from "../1_Page";
import { BrowserRouter } from "react-router-dom";
import { PC, Mobile } from "./model/useMediaQuery.js";
import { CookiesProvider } from "react-cookie";
import { RecoilRoot } from "recoil";
import { ThemeProvider } from "styled-components";

import GlobalStyle from "./style/GlobalStyle.js";
import ResetStyle from "./style/resetStyle.js";
import theme from "./style/theme.js";
import STYLE from "./style/style.js";

const App = () => {
  return (
    <CookiesProvider>
      <RecoilRoot>
        <BrowserRouter>
          <GlobalStyle />
          <ResetStyle />
          <ThemeProvider theme={theme.defaultTheme}>
            <PC>
              <STYLE.Main>
                <Page />
              </STYLE.Main>
            </PC>
            <Mobile>
              <STYLE.Main>
                <Page />
              </STYLE.Main>
            </Mobile>
          </ThemeProvider>
        </BrowserRouter>
      </RecoilRoot>
    </CookiesProvider>
  );
};

export default App;
