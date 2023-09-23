import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { GlobalStyle, Version } from "./styles/GlobalStyle";
import Home from "@pages/Home";
import Help from "@pages/Help";
import AboutMe from "@pages/AboutMe";
import Maintenance from "@pages/Maintenance";
import Error404 from "@pages/Error404";

const App = () => {
  return (
    <RecoilRoot>
      <GlobalStyle />
      <Version>Hansei Weekly Menu 1.0.2</Version>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/maintenance" element={<Maintenance />} />
          <Route path="/help" element={<Help />} />
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
};
export default App;
