import Page from "../1_Page";
import { BrowserRouter } from "react-router-dom";
import { PC, Mobile } from "./model/useMediaQuery.js";
import { ThemeProvider } from "styled-components";

import GlobalStyle from "./style/globalStyle.js";
import ResetStyle from "./style/resetStyle.js";
import theme from "./style/theme.js";
import STYLE from "./style/style.js";

import ConfirmModal from "../2_Widget/ConfirmModal/index.js";
import useAlertModalAtom from "../4_Shared/Recoil/useAlertModalAtom.js";

const App = () => {
  const [, modalMessage, closeModal] = useAlertModalAtom();
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme.defaultTheme}>
        <GlobalStyle />
        <ResetStyle />
        <PC>
          <STYLE.Main>
            <Page />
          </STYLE.Main>
        </PC>
        <Mobile>
          <STYLE.Main>
            <Page />
          </STYLE.Main>
          {modalMessage && (
            <ConfirmModal message={modalMessage} onClose={closeModal} />
          )}
        </Mobile>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
