import {useRecoilValue} from 'recoil';

import {langState} from '@modules/atoms';
import {MyPageString} from '@utils/constants/strings';
import {Container, Logo} from './styles';
import PageLogo from '@components/PageLogo';
import {Divider} from '@components/Divider';
import {ListButton} from '@components/ListButton';

const MyPageView = () => {
  const lang = useRecoilValue(langState);

  return (
    <Container>
      <PageLogo
        title={MyPageString({lang: lang, key: 'title'})}
        subtitle={''}
      />
      <ListButton label={'로그인'} />
      <Divider />
      <div>
        <ListButton label={'구매 내역'} />
      </div>
      <Divider />
      <div>
        <ListButton label={'도움말'} />
        <ListButton label={'About me'} />
      </div>
    </Container>
  );
};

export default MyPageView;
