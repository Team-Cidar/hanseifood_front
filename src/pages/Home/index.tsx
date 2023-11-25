import {useEffect, useState} from 'react';
import {HomeView} from './HomeView';
import {useRecoilState, useSetRecoilState} from 'recoil';
import {langState} from '@modules/atoms';
import {Lang, LangEnum} from '@type/index';
import {getSystemLang} from '@utils/languages';

const Home = () => {
  const setLang = useSetRecoilState<Lang>(langState);

  useEffect(() => {
    setLang(() => getSystemLang());
  }, []);

  return <HomeView />;
};

export default Home;
