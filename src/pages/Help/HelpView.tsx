import ios from "@assets/gifs/ios.gif";
import android from "@assets/gifs/android.gif";
import { Container, Gif, ImageView, StyledScroll, StyledText, TextView } from "./styles";
import { Default, Mobile } from "@utils/MediaQuery";

const HelpView = () => {
  return (
    <Container>
      <Default>
        <ImageView>
          <Gif src={android} />
          <Gif src={ios} />
        </ImageView>
        <TextView>
          <StyledText>
            안드로이드
          </StyledText>
          <StyledText>
            iOS
          </StyledText>
        </TextView>
      </Default>
      <Mobile>
        <StyledScroll>
          <Gif src={android} />
          <StyledText>안드로이드</StyledText>
          <Gif src={ios} />
          <StyledText>iOS</StyledText>
        </StyledScroll>
      </Mobile>
    </Container>
  );
};
export default HelpView;
