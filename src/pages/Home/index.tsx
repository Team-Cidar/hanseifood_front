import {useEffect, useState} from 'react';
import {HomeView} from './HomeView';
import {useRecoilState, useSetRecoilState} from 'recoil';
import {langState} from '@modules/atoms';
import {Lang, LangEnum} from '@type/index';
import {getSystemLang} from '@utils/languages';
import FontFaceObserver from 'fontfaceobserver';
import {User, WeeklyData} from '@type/index';
import {userState, weeklyDataState} from '@modules/atoms';
import {requestWeekFood} from '@apis/index';

const Home = () => {
  let font = new FontFaceObserver('NotoSansBlack');
  const [weeklyData, set_weeklyData] =
    useRecoilState<WeeklyData>(weeklyDataState);
  const [loading, set_loading] = useState(false);
  const [{isEmployee}, set_isEmployee] = useRecoilState<User>(userState);
  const [isModalOpen, set_isModalOpen] = useState(false);
  const setLang = useSetRecoilState<Lang>(langState);

  useEffect(() => {
    requestWeekFood()
      .then(res => {
        set_weeklyData(res.data);
      })
      .catch(err => {
        console.log(err);
      });
    font.load().then(() => {
      set_loading(true);
    });
    setLang(() => getSystemLang());
  }, []);

  const toggleHandler = () => {
    set_isEmployee({isEmployee: !isEmployee});
  };

  const handleModal = () => {
    set_isModalOpen(!isModalOpen);
  };
  return (
    <HomeView
      weeklyData={weeklyData}
      toggleHandler={toggleHandler}
      handleModal={handleModal}
      loading={loading}
    />
  );
};

export default Home;
