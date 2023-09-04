import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { Home } from "@pages/Home";
import { GlobalStyle, Version } from "./styles/GlobalStyle";
import Help from "@pages/Help";
import AboutMe from "@pages/AboutMe";

const App = () => {
  return (
    <RecoilRoot>
      <GlobalStyle />
      <Version>Hansei Weekly Menu 1.0.1</Version>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/help" element={<Help />} />
          <Route path="/about-me" element={<AboutMe />} />
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
};
export default App;
