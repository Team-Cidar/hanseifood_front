import packageJson from '../package.json';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { GlobalStyle, Version } from "./styles/GlobalStyle";
import Home from "@pages/Home";
import Help from "@pages/Help";
import AboutMe from "@pages/AboutMe";
import Maintenance from "@pages/Maintenance";
import Error404 from "@pages/Error404";
import Navbar from '@components/Navbar';

const App = () => {
  return (
    <RecoilRoot>
      <GlobalStyle />
      {/* <Version>Hansei Weekly Menu {packageJson.version}</Version> */}
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/home" element={<div>home</div>} />
          <Route path="/ticket" element={<div>ticket</div>} />
          <Route path="/mypage" element={<div>mypage</div>} />
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
