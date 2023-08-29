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
import { Menu } from "@type/index";
import Skeleton from "@components/Skeleton/SkeletonCardView";
import { Toggle } from "@components/Toggle";
import { useState } from "react";
import { ToggleView } from "@components/ToggleView";

type HomeViewProps = {
  weeklyMenu: Menu[] | [];
};

/* 그 외 컴포넌트 사이징 */
export const HomeView = ({ weeklyMenu }: HomeViewProps) => {
  const [checked, set_checked] = useState(false);
  const [toggleLabel, set_toggleLabel] = useState("학생");

  const toggleHandler = () => {
    set_checked(!checked);
    checked ? set_toggleLabel("학생") : set_toggleLabel("교직원");
  };

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
        <ToggleView label={toggleLabel}>
          <Toggle checked={checked} onClick={toggleHandler} />
        </ToggleView>
      </ToggleLayout>
    </Background>
  );
};
