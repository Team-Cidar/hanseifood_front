import React from 'react';
import {useRecoilValue} from 'recoil';

import {langState} from '@modules/atoms';
import {Container, Logo} from './styles';
import {TicketPageString} from '@utils/constants/strings';
import PageLogo from '@components/PageLogo';

const TicketPageView = () => {
  const lang = useRecoilValue(langState);

  return (
    <Container>
      <PageLogo
        title={TicketPageString({lang: lang, key: 'title'})}
        subtitle={'한눈에, 간편하게! 식권 구매 서비스'}
      />
    </Container>
  );
};

export default TicketPageView;
