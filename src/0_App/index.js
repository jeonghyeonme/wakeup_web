import Page from "../page";
import { BrowserRouter } from "react-router-dom";
import GlobalStyle from "./style/GlobalStyle.js";
import { PC, Mobile } from "./model/useMediaQuery.js";
const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <PC>
        <Page />
      </PC>
      <Mobile>
        <Page />
      </Mobile>
    </BrowserRouter>
  );
};

export default App;
