import SvgIcon from "@components/SvgIcon";
import { TitleTextRight } from "@pages/Home/Home.styled";
import { Default, Mobile } from "@utils/MediaQuery";
import React from "react";
import {
  SkeletonMobileCarousels,
  SkeletonMobileCarouselWrapper,
  SkeletonMobileContainer,
  SkeletonStyledMobileView,
  SkeletonTitleTextBox,
  SkeletonTitleTextMobile,
  SkeletonTitleTextMobileRight,
} from "./Skeleton.mobile.styled";
import {
  SkeletonCarousels,
  SkeletonTitleText,
  SkeletonCarouselWrapper,
  SkeletonContainer,
  SkeletonSwipeLeftBtn,
  SkeletonSwipeRightBtn,
  SkeletonStyleView,
} from "./Skeleton.styled";

const Skeleton = () => {
  return (
    <>
      <Default>
        <SkeletonStyleView>
          <SkeletonTitleText>Hansei Weekly Food</SkeletonTitleText>
          <SkeletonContainer>
            <SkeletonSwipeLeftBtn>
              <SvgIcon
                name={"chevron_left"}
                width={36}
                height={36}
                fill={"grey"}
              />
            </SkeletonSwipeLeftBtn>
            <SkeletonCarouselWrapper>
              <SkeletonCarousels></SkeletonCarousels>
            </SkeletonCarouselWrapper>
            <SkeletonSwipeRightBtn>
              <SvgIcon
                name={"chevron_right"}
                width={36}
                height={36}
                fill={"grey"}
              />
            </SkeletonSwipeRightBtn>
          </SkeletonContainer>
          <TitleTextRight>
            매 주 월요일 오전 8:00에 식단표가 업데이트됩니다.
          </TitleTextRight>
        </SkeletonStyleView>
      </Default>

      <Mobile>
        <SkeletonStyledMobileView>
          <SkeletonTitleTextBox>
            <SkeletonTitleTextMobile>Hansei</SkeletonTitleTextMobile>
            <SkeletonTitleTextMobile>Weekly Food</SkeletonTitleTextMobile>
          </SkeletonTitleTextBox>
          <SkeletonMobileContainer>
            <SkeletonSwipeLeftBtn>
              <SvgIcon
                name={"chevron_left"}
                width={36}
                height={36}
                fill={"grey"}
              />
            </SkeletonSwipeLeftBtn>
            <SkeletonMobileCarouselWrapper>
              <SkeletonMobileCarousels></SkeletonMobileCarousels>
            </SkeletonMobileCarouselWrapper>
            <SkeletonSwipeRightBtn>
              <SvgIcon
                name={"chevron_right"}
                width={36}
                height={36}
                fill={"grey"}
              />
            </SkeletonSwipeRightBtn>
          </SkeletonMobileContainer>
        </SkeletonStyledMobileView>
      </Mobile>
    </>
  );
};

export default Skeleton;
