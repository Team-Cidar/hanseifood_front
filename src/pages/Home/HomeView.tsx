import Carousel from "@components/Carousel";
import { Background, TitleText, TitleTextBox, TitleTextMobile, TitleTextMobileRight, TitleTextRight } from "./Home.styled";
import CardView from "@components/CardView";
import { Default, Mobile } from "@utils/MediaQuery";
import { Menu } from "@type/index";

type HomeViewProps = {
  weeklyMenu: Menu[] | [];
}

/* 그 외 컴포넌트 사이징 */
export const HomeView = ({ weeklyMenu }: HomeViewProps) => {
  return (
    <Background>
      <Default>
        <CardView>
          <TitleText>Hansei Weekly Food</TitleText>
          <Carousel weeklyMenu={weeklyMenu} />
          <TitleTextRight>매 주 월요일 오전 8:00에 식단표가 업데이트됩니다.</TitleTextRight>
        </CardView>
      </Default>
      <Mobile>
        <CardView>
          <TitleTextBox>
            <TitleTextMobile>Hansei</TitleTextMobile>
            <TitleTextMobile>Weekly Food</TitleTextMobile>
          </TitleTextBox>
          <Carousel weeklyMenu={weeklyMenu} />
          <TitleTextMobileRight>매 주 월요일 오전 8:00에 식단표가 업데이트됩니다.</TitleTextMobileRight>
        </CardView>
      </Mobile>
    </Background>
  );
};