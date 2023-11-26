import Carousel from '@components/Carousel';
import {
  CarouselView,
  Container,
  Logo,
  LogoView,
  Subtitle,
  TicketView,
} from './Home.styled';
import {WeeklyData} from '@type/index';
import {useRecoilState, useRecoilValue} from 'recoil';
import {userState} from '@modules/atoms';
import PageLogo from '@components/PageLogo';
import {langState} from '@modules/atoms';
import {Lang} from '@type/index';
import {HomeString} from '@utils/constants/strings';

type HomeViewProps = {
  weeklyData: WeeklyData;
  toggleHandler: () => void;
  handleModal: () => void;
  loading: boolean;
};

export const HomeView = ({
  weeklyData,
  toggleHandler,
  handleModal,
  loading,
}: HomeViewProps) => {
  const {isEmployee} = useRecoilValue(userState);

  const lang = useRecoilValue<Lang>(langState);

  return (
    <Container>
      <PageLogo
        title={HomeString({lang: lang, key: 'title'})}
        subtitle={HomeString({lang: lang, key: 'subtitle'})}
      />
      <CarouselView>
        {weeklyData.only_employee ? (
          <Carousel weeklyMenu={weeklyData.employee_menu} />
        ) : isEmployee ? (
          <Carousel weeklyMenu={weeklyData.employee_menu} />
        ) : (
          <Carousel weeklyMenu={weeklyData.student_menu} />
        )}
      </CarouselView>
      <TicketView>티켓</TicketView>
    </Container>
  );
};
