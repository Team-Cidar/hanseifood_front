import Carousel from "@components/Carousel";
import { CarouselView, Container, Logo, LogoView, Subtitle, TicketView } from "./Home.styled";
import { WeeklyData } from "@type/index";
import { useRecoilValue } from "recoil";
import { userState } from "@modules/atoms";
import PageLogo from "@components/PageLogo";

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
  loading
}: HomeViewProps) => {
  const { isEmployee } = useRecoilValue(userState);

  return (
    <Container>
      <PageLogo title={"홈"} subtitle={"식단표를 미리 확인하고 식권을 편리하게 구매하세요!"} />
      <CarouselView>
        {weeklyData.only_employee ? (
            <Carousel weeklyMenu={weeklyData.employee_menu} />
          ) : isEmployee ? (
            <Carousel weeklyMenu={weeklyData.employee_menu} />
          ) : (
            <Carousel weeklyMenu={weeklyData.student_menu} />
          )}
      </CarouselView>
      <TicketView>
        티켓
      </TicketView>
    </Container>
  );
};
