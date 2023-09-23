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
import Skeleton from "@components/Skeleton";
import { Toggle } from "@components/Toggle";
import { ToggleView } from "@components/ToggleView";
import { useRecoilValue } from "recoil";
import { userState } from "@modules/atoms";
import {
  SkeletonStyledToggleView,
  SkeletonToggleLayout,
} from "@components/Skeleton/Skeleton.styled";
import FloatingBar from "@components/FloatingBar";

type HomeViewProps = {
  weeklyData: WeeklyData;
  toggleHandler: () => void;
  handleModal: () => void;
  loading: boolean;
};

export const HomeView = ({ weeklyData, toggleHandler, handleModal, loading }: HomeViewProps) => {
  const { isEmployee } = useRecoilValue(userState);

  return (
    <Background>
      <FloatingBar></FloatingBar>
      {loading ? (
        <CardView>
          <Default>
            <TitleText>Hansei Weekly Menu</TitleText>
          </Default>
          <Mobile>
            <TitleTextBox>
              <TitleTextMobile>Hansei</TitleTextMobile>
              <TitleTextMobile>Weekly Menu</TitleTextMobile>
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
        <ToggleView disabled={true} label="추가 메뉴 보기" onClick={handleModal}/>
        {weeklyData.only_employee ? (
          <ToggleView disabled={true} label="학생 & 교직원"/>
        ) : (
          <ToggleView disabled={false} label={isEmployee ? "교직원" : "학생"}>
            <Toggle checked={isEmployee} onClick={toggleHandler} />
          </ToggleView>
        )}
      </ToggleLayout>
    </Background>
  );
};
