import Carousel from '@components/Carousel';
import { AdditionalButton, CarouselView, CarouselViewBottom, Container, ToggleLabel, ToggleView } from './Home.styled';
import { WeeklyData } from '@type/index';
import { useRecoilValue } from 'recoil';
import { userState } from '@modules/atoms';
import PageLogo from '@components/PageLogo';
import { langState } from '@modules/atoms';
import { Lang } from '@type/index';
import { HomeString } from '@utils/constants/strings';
import { Toggle } from '@components/Toggle';

type HomeViewProps = {
  weeklyData: WeeklyData;
  toggleHandler: () => void;
  handleModal: () => void;
  loading: boolean;
};

export const HomeView = ({ weeklyData, toggleHandler, handleModal }: HomeViewProps) => {
  const { isEmployee } = useRecoilValue(userState);

  const lang = useRecoilValue<Lang>(langState);

  return (
    <Container>
      <PageLogo
        title={HomeString({ lang: lang, key: 'title' })}
        subtitle={HomeString({ lang: lang, key: 'subtitle' })}
      />
      <CarouselView>
        {weeklyData.employeeMenu.exists && !weeklyData.studentMenu.exists ? (
          <Carousel weeklyMenu={weeklyData.employeeMenu.menus} />
        ) : isEmployee ? (
          <Carousel weeklyMenu={weeklyData.employeeMenu.menus} />
        ) : (
          <Carousel weeklyMenu={weeklyData.studentMenu.menus} />
        )}
        <CarouselViewBottom>
          <AdditionalButton onClick={handleModal}>일품특선메뉴</AdditionalButton>
          <ToggleView>
            {weeklyData.employeeMenu.exists && !weeklyData.studentMenu.exists ? (
              <ToggleLabel>{HomeString({ lang: lang, key: 'toggleLabelStudentAndEmployee' })}</ToggleLabel>
            ) : (
              <ToggleLabel>
                {isEmployee
                  ? HomeString({ lang: lang, key: 'toggleLabelEmployee' })
                  : HomeString({ lang: lang, key: 'toggleLabelStudent' })}
              </ToggleLabel>
            )}
            {weeklyData.employeeMenu.exists && !weeklyData.studentMenu.exists ? (
              <Toggle checked={isEmployee} onClick={toggleHandler} disabled={true} />
            ) : (
              <Toggle checked={isEmployee} onClick={toggleHandler} />
            )}
          </ToggleView>
        </CarouselViewBottom>
      </CarouselView>
    </Container>
  );
};
