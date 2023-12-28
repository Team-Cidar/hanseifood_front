import packageJson from '../package.json';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {RecoilRoot} from 'recoil';
import {GlobalStyle, Version} from './styles/GlobalStyle';
import Home from '@pages/Home';
import Help from '@pages/Help';
import AboutMe from '@pages/AboutMe';
import Maintenance from '@pages/Maintenance';
import Error404 from '@pages/Error404';
import Navbar from '@components/Navbar';
import TicketPage from '@pages/TicketPage';
import MyPage from '@pages/MyPage';
import BackOffice from '@pages/BackOffice';
import Login from '@pages/Login';
import LoginConfirm from '@pages/LoginConfirm';

const App = () => {
  return (
    <RecoilRoot>
      <GlobalStyle />
      {/* <Version>Hansei Weekly Menu {packageJson.version}</Version> */}
      <BrowserRouter>
        <Navbar />
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/ticket" element={<TicketPage />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/maintenance" element={<Maintenance />} />
          <Route path="/help" element={<Help />} />
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="/back-office" element={<BackOffice />} />
          <Route path="/login" element={<Login />} />
          <Route path="/login/confirm" element={<LoginConfirm />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
};
export default App;
