import PageLogo from '@components/PageLogo';
import { Container, TempBody, TitleSubText, TitleText } from './styles';
import { StyledImage } from '@pages/Maintenance/styles';
import logo512 from '@assets/images/logo512.png';

const BackOfficeChartView = () => (
  <Container>
    <PageLogo title={'유저 선호도 분석 서비스'} subtitle={''} />
    <TempBody>
      <StyledImage src={logo512} />
      <TitleText>{'서비스 준비중입니다!'}</TitleText>
      <TitleSubText>{'완료되면 분석 서비스를 사용할 수 있습니다!'}</TitleSubText>
    </TempBody>
  </Container>
);

export default BackOfficeChartView;
