import CardView from '@components/CardView';
import FloatingBar from '@components/FloatingBar';
import HelpView from './HelpView';
import { Background } from './styles';

const Help = () => {
  return (
    <Background>
      <FloatingBar></FloatingBar>
      <CardView>
        <HelpView></HelpView>
      </CardView>
    </Background>
  );
};

export default Help;
