import CardView from "@components/CardView";
import FloatingBar from "@components/FloatingBar";
import { Background } from "@pages/Home/Home.styled";
import HelpView from "./HelpView";

const Help = () => {
  return (
    <Background>
      <FloatingBar></FloatingBar>
      <CardView>
        <div></div>
      </CardView>
    </Background>
  );
};

export default Help;
