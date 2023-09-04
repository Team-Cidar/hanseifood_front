import ios from "@assets/gifs/ios.gif";
import android from "@assets/gifs/android.gif";
import { Container, Gif, ImageView, StyledText, TextView } from "./styles";

const HelpView = () => {
  return (
    <Container>
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
    </Container>
  );
};
export default HelpView;
