import Page from "../1_Page";
import { BrowserRouter } from "react-router-dom";
import { PC, Mobile } from "./model/useMediaQuery.js";
import { CookiesProvider } from "react-cookie";
import { RecoilRoot } from "recoil";
import { ThemeProvider } from "styled-components";

import GlobalStyle from "./style/GlobalStyle.js";
import ResetStyle from "./style/resetStyle.js";
import theme from "./style/theme.js";

const App = () => {
  return (
    <CookiesProvider>
      <RecoilRoot>
        <BrowserRouter>
          <GlobalStyle />
          <ResetStyle />
          <ThemeProvider theme={theme.defaultTheme}>
            <PC>
              <Page />
            </PC>
            <Mobile>
              <Page />
            </Mobile>
          </ThemeProvider>
        </BrowserRouter>
      </RecoilRoot>
    </CookiesProvider>
  );
};

export default App;
