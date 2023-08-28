import { EColor } from "@styles/color";
import styled from "styled-components";
import {
  Title1,
  Title2,
  Title3,
  Title4,
  body1,
  body2,
  body3,
} from "@styles/font";

export const SkeletonStyleView = styled.div`
  position: relative;
  padding: 48px;
  width: 592px;
  height: 584px;
  background: ${EColor.WHITE};

  border-radius: 50px;
  box-shadow: 8px 4px 4px ${EColor.TEXT_400};
`;
export const SkeletonTitleText = styled.div`
  ${Title1}
  color: ${EColor.GRAY};
  opacity: 0.2;
`;

export const SkeletonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin: 50px 50px 50px 0px;
  width: 100%;
`;

export const SkeletonCarouselWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80%;
  height: 80%;
  padding: 0 10%;

  overflow: hidden;
  z-index: 1;
  pointer-events: auto;

  & > ul {
    padding-right: 14px;
  }
`;

export const SkeletonSwipeLeftBtn = styled.div`
  width: 24px;
  height: 28px;
  display: flex;
`;

export const SkeletonSwipeRightBtn = styled.div`
  width: 24px;
  height: 28px;
  display: flex;
`;

export const SkeletonCarousels = styled.ul`
  display: flex;
  height: 324px;
  width: 100%;
  background: ${EColor.GRAY};
  border-radius: 22px;
  opacity: 0.2;
  box-shadow: 8px 4px 4px ${EColor.GRAY};
`;
