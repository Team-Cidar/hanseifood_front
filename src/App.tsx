import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { GlobalStyle } from './styles/GlobalStyle';
import Home from '@pages/Home';
import Help from '@pages/Help';
import AboutMe from '@pages/AboutMe';
import Maintenance from '@pages/Maintenance';
import Error404 from '@pages/Error404';
import Navbar from '@components/Navbar';
import TicketPage from '@pages/NoticePage';
import MyPage from '@pages/MyPage';
import BackofficeMenu from '@pages/BackOfficeMenu';
import Login from '@pages/Login';
import LoginConfirm from '@pages/LoginConfirm';
import { CommentPage } from '@pages/Comment';
import MyLike from '@pages/MyLike';
import MyComment from '@pages/MyComment';
import BackOffice from '@pages/BackOffice';
import BackOfficeComment from '@pages/BackOfficeComment';
import BackOfficeUser from '@pages/BackOfficeUser';
import BackOfficeChart from '@pages/BackOfficeChart';

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
          <Route path="/home/comments/*" element={<CommentPage />} />
          <Route path="/notice" element={<TicketPage />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/mypage/like" element={<MyLike />} />
          <Route path="/mypage/comment" element={<MyComment />} />
          <Route path="/maintenance" element={<Maintenance />} />
          <Route path="/help" element={<Help />} />
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="/back-office" element={<BackOffice />} />
          <Route path="/back-office/menus" element={<BackofficeMenu />} />
          <Route path="/back-office/comments" element={<BackOfficeComment />} />
          <Route path="/back-office/users" element={<BackOfficeUser />} />
          <Route path="/back-office/charts" element={<BackOfficeChart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/login/confirm" element={<LoginConfirm />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
};
export default App;
