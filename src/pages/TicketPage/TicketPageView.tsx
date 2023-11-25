import React from 'react';
import {useRecoilValue} from 'recoil';

import {langState} from '@modules/atoms';
import {Container, Logo} from './styles';
import {TicketPageString} from '@utils/constants/strings';

const TicketPageView = () => {
  const lang = useRecoilValue(langState);

  return (
    <Container>
      <Logo>{TicketPageString({lang: lang, key: 'title'})}</Logo>
    </Container>
  );
};

export default TicketPageView;
