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
import { WeeklyData } from "@type/index";
import Skeleton from "@components/Skeleton/SkeletonCardView";
import { Toggle } from "@components/Toggle";
import { ToggleView } from "@components/ToggleView";
import { useRecoilValue } from "recoil";
import { userState } from "@modules/atoms";
import {
  SkeletonStyledToggleView,
  SkeletonToggleLayout,
} from "@components/Skeleton/Skeleton.styled";

type HomeViewProps = {
  weeklyData: WeeklyData;
  toggleHandler: () => void;
};

export const HomeView = ({ weeklyData, toggleHandler }: HomeViewProps) => {
  const { isEmployee } = useRecoilValue(userState);

  return (
    <Background>
      {weeklyData.employee_menu ? (
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
          {weeklyData.only_employee ? (
            <Carousel weeklyMenu={weeklyData.employee_menu} />
          ) : isEmployee ? (
            <Carousel weeklyMenu={weeklyData.employee_menu} />
          ) : (
            <Carousel weeklyMenu={weeklyData.student_menu} />
          )}
          <Default>
            <TitleTextRight>
              매 주 월요일 오전 8:00에 식단표가 업데이트됩니다.
            </TitleTextRight>
          </Default>
          <Mobile>
            <TitleTextMobileRight>
              매 주 월요일 오전 8:00에 식단표가 업데이트됩니다.
            </TitleTextMobileRight>
          </Mobile>
        </CardView>
      ) : (
        <>
          <Default>
            <>
              <Skeleton></Skeleton>
            </>
          </Default>
          <Mobile>
            <Skeleton></Skeleton>
          </Mobile>
          <SkeletonToggleLayout>
            <SkeletonStyledToggleView></SkeletonStyledToggleView>
          </SkeletonToggleLayout>
        </>
      )}

      <ToggleLayout>
        {weeklyData.only_employee ? (
          <ToggleView disabled={true} />
        ) : (
          <ToggleView label={isEmployee ? "교직원" : "학생"}>
            <Toggle checked={isEmployee} onClick={toggleHandler} />
          </ToggleView>
        )}
      </ToggleLayout>
    </Background>
  );
};
