import React from 'react';
import {useRecoilValue} from 'recoil';

import {langState} from '@modules/atoms';
import {Container} from './styles';
import {TicketPageString} from '@utils/constants/strings';
import PageLogo from '@components/PageLogo';

const TicketPageView = () => {
  const lang = useRecoilValue(langState);

  return (
    <Container>
      <PageLogo
        title={TicketPageString({lang: lang, key: 'title'})}
        subtitle={TicketPageString({lang: lang, key: 'subtitle'})}
      />
    </Container>
  );
};

export default TicketPageView;
