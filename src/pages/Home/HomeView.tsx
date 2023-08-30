import Carousel from "@components/Carousel";
import {
  Background,
  TitleText,
  TitleTextBox,
  TitleTextMobile,
  TitleTextMobileRight,
  TitleTextRight,
  ToggleLayout,
} from "./Home.styled";
import CardView from "@components/CardView";
import { Default, Mobile } from "@utils/MediaQuery";
import { BooleanSetter, Menu, StringSetter } from "@type/index";
import Skeleton from "@components/Skeleton/SkeletonCardView";
import { Toggle } from "@components/Toggle";
import { ToggleView } from "@components/ToggleView";

type HomeViewProps = {
  weeklyMenu: Menu[] | [];
  checked: boolean;
  toggleLabel: string;
  toggleHandler: any;
};

export const HomeView = ({
  weeklyMenu,
  checked,
  toggleLabel,
  toggleHandler,
}: HomeViewProps) => {

  return (
    <Background>
      {weeklyMenu.length === 0 ? (
        <>
          <Default>
            <Skeleton></Skeleton>
          </Default>
          <Mobile>
            <Skeleton></Skeleton>
          </Mobile>
        </>
      ) : (
        <CardView>
          <Default>
            <TitleText>Hansei Weekly Food</TitleText>
          </Default>
          <Mobile>
            <TitleTextBox>
              <TitleTextMobile>Hansei</TitleTextMobile>
              <TitleTextMobile>Weekly Food</TitleTextMobile>
            </TitleTextBox>
          </Mobile>
          <Carousel weeklyMenu={weeklyMenu} />
          <Default>
            <TitleTextRight>매 주 월요일 오전 8:00에 식단표가 업데이트됩니다.</TitleTextRight>
          </Default>
          <Mobile>
            <TitleTextMobileRight>매 주 월요일 오전 8:00에 식단표가 업데이트됩니다.</TitleTextMobileRight>
          </Mobile>
        </CardView>
      )}
      <ToggleLayout>
        {
          weeklyMenu[0]?.only_employee ?
            <ToggleView disabled={true} />
          :
            <ToggleView label={toggleLabel}>
              <Toggle checked={checked} onClick={toggleHandler} />
            </ToggleView>
        }
      </ToggleLayout>
    </Background>
  );
};
