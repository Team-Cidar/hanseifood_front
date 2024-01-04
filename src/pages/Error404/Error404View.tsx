import { Body, Container, StyledImage, TitleSubText, TitleText } from "./styles";
import logo512 from '@assets/images/logo512.png';

const Error404View = () => {
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
          404 Not Found<br/>페이지를 찾을 수 없습니다.
      </Body>
    </Container>
  );
};

export default Error404View;