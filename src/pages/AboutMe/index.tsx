import CardView from "@components/CardView";
import FloatingBar from "@components/FloatingBar";
import { Background } from "@pages/Home/Home.styled";
import { Developers, Participants } from "./Participant";

const AboutMe = () => {
  return (
    <Background>
      <FloatingBar></FloatingBar>
      <CardView>
        <Participants>
          <Developers></Developers>
        </Participants>
      </CardView>
    </Background>
  );
};

export default AboutMe;
