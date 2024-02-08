import { useRecoilValue } from 'recoil';

import { langState } from '@modules/atoms';
import { Container, TempBody, TitleSubText, TitleText } from './styles';
import { NoticePageString } from '@utils/constants/strings';
import PageLogo from '@components/PageLogo';
import { StyledImage } from '@pages/Maintenance/styles';
import logo512 from '@assets/images/logo512.png';

const NoticePageView = () => {
  const lang = useRecoilValue(langState);

  return (
    <Container>
      <PageLogo
        title={NoticePageString({ lang: lang, key: 'title' })}
        subtitle={NoticePageString({ lang: lang, key: 'subtitle' })}
      />
      <TempBody>
        <StyledImage src={logo512} />
        <TitleText>{NoticePageString({ lang: lang, key: 'information.title.implementing' })}</TitleText>
        <TitleSubText>{NoticePageString({ lang: lang, key: 'information.sub.implementing' })}</TitleSubText>
      </TempBody>
    </Container>
  );
};

export default NoticePageView;
