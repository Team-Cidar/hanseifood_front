import Carousel from '@components/Carousel';
import {
  AdditionalButton,
  CarouselView,
  CarouselViewBottom,
  Container,
  TicketView,
  ToggleLabel,
  ToggleView,
} from './Home.styled';
import { WeeklyData } from '@type/index';
import { useRecoilValue } from 'recoil';
import { userState } from '@modules/atoms';
import PageLogo from '@components/PageLogo';
import { langState } from '@modules/atoms';
import { Lang } from '@type/index';
import { HomeString } from '@utils/constants/strings';
import { Toggle } from '@components/Toggle';
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
  handleModal
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
          <AdditionalButton onClick={handleModal}>일품특선메뉴</AdditionalButton>
          <ToggleView>
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
          </ToggleView>
        </CarouselViewBottom>
      </CarouselView>
      <TicketView>
        <TicketItem label={'티켓'} height={120} />
      </TicketView>
    </Container>
  );
};
