import CardView from "@components/CardView";
import FloatingBar from "@components/FloatingBar";
import SvgIcon from "@components/SvgIcon";
import { Default, Mobile } from "@utils/MediaQuery";
import {
  Background,
  Developer,
  Developers,
  EmailInfo,
  EmailText,
  MobileParticipants,
  Participants,
} from "./styles";

const AboutMe = () => {
  return (
    <Background>
      <FloatingBar></FloatingBar>
      <CardView>
        <Default>
          <Participants>
            <Developers>
              Developer
              <Developer>강혜미</Developer>
              <Developer>김호준</Developer>
              <Developer>박승우</Developer>
            </Developers>
          </Participants>
        </Default>
        <Mobile>
          <MobileParticipants>
            <Developers>
              Developer
              <Developer>강혜미</Developer>
              <Developer>김호준</Developer>
              <Developer>박승우</Developer>
            </Developers>
          </MobileParticipants>
        </Mobile>
        <EmailInfo>
          <SvgIcon
            name={"email"}
            width={36}
            height={36}
            fill={"black"}
          ></SvgIcon>
          <EmailText>jipkim2@gmail.com</EmailText>
        </EmailInfo>
      </CardView>
    </Background>
  );
};

export default AboutMe;
