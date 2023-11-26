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
import { ToggleView } from '@components/ToggleView';
import { Toggle } from '@components/Toggle';

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
        subtitle={'식단표를 미리 확인하고 식권을 편리하게 구매하세요!'}
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
            <ToggleLabel>학생 & 교직원 식당 식단표</ToggleLabel>
          ) : (
            <ToggleLabel>{isEmployee ? "교직원 식당 식단표" : "학생 식당 식단표"}</ToggleLabel>
          )}
          {weeklyData.only_employee ? (
            <Toggle checked={isEmployee} onClick={toggleHandler} disabled={true} />
          ) : (
            <ToggleView disabled={false} label={isEmployee ? "교직원" : "학생"}>
              <Toggle checked={isEmployee} onClick={toggleHandler} />
            </ToggleView>
          )}
        </CarouselViewBottom>
      </CarouselView>
      <TicketView>티켓</TicketView>
    </Container>
  );
};
