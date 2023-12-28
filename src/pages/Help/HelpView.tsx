import ios from "@assets/gifs/ios.gif";
import android from "@assets/gifs/android.gif";
import { Container, Gif, StyledScroll, StyledText } from "./styles";
import PageLogo from "@components/PageLogo";

const HelpView = () => {
  return (
    <Container>
      <PageLogo title={"도움말"} subtitle={"앱 사용 간 필요한 도움말 페이지입니다."}/>
      <StyledScroll>
        <Gif src={android} />
        <StyledText>Android</StyledText>
        <Gif src={ios} />
        <StyledText>iOS</StyledText>
      </StyledScroll>
    </Container>
  );
};
export default HelpView;
