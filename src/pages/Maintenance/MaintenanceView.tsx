import { Body, Container, StyledImage, TitleSubText, TitleText } from "./styles";
import logo512 from '@assets/images/logo512.png';

const MaintenanceView = () => {
  return (
    <Container>
      <StyledImage src={logo512} />
      <TitleText>
        Hansei Weekly Menu
      </TitleText>
      <TitleSubText>
        한세대학교 주간식단표 서비스
      </TitleSubText>
      <Body>
        시스템 점검으로 인하여 일시적으로<br />홈페이지 접속이 불가능합니다.
      </Body>
    </Container>
  );
}

export default MaintenanceView;