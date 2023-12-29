import Carousel from '@components/Carousel';
import {
  CarouselView,
  CarouselViewBottom,
  Container,
  Logo,
  LogoView,
  Subtitle,
  TicketView,
  ToggleLabel,
} from './Home.styled';
import {WeeklyData} from '@type/index';
import {useRecoilState, useRecoilValue} from 'recoil';
import {userState} from '@modules/atoms';
import PageLogo from '@components/PageLogo';
import {langState} from '@modules/atoms';
import {Lang} from '@type/index';
import {HomeString} from '@utils/constants/strings';
import FloatingBar from '@components/FloatingBar';
import {ToggleView} from '@components/ToggleView';
import {Toggle} from '@components/Toggle';
import { TicketItem } from '@components/Ticket';

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
        <CarouselViewBottom>
          {weeklyData.only_employee ? (
            <ToggleLabel>
              {HomeString({lang: lang, key: 'toggleLabelStudentAndEmployee'})}
            </ToggleLabel>
          ) : (
            <ToggleLabel>
              {isEmployee
                ? HomeString({lang: lang, key: 'toggleLabelEmployee'})
                : HomeString({lang: lang, key: 'toggleLabelStudent'})}
            </ToggleLabel>
          )}
          {weeklyData.only_employee ? (
            <Toggle
              checked={isEmployee}
              onClick={toggleHandler}
              disabled={true}
            />
          ) : (
            <Toggle checked={isEmployee} onClick={toggleHandler} />
          )}
        </CarouselViewBottom>
      </CarouselView>
      <TicketView>
        <TicketItem label={'티켓'} height={120} />
      </TicketView>
    </Container>
  );
};
