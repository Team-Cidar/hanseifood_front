import { EColor } from "@styles/color";
import styled from "styled-components";

import { Title2, body6 } from "@styles/font";

export const SkeletonStyledMobileView = styled.div`
  position: relative;
  width: 322px;
  height: 546px;
  background: ${EColor.WHITE};
  border-radius: 50px;
  box-shadow: 8px 4px 4px ${EColor.TEXT_400};
`;

export const SkeletonMobileContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 324px;
`;

export const SkeletonMobileCarouselWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80%;
  height: 326px;
  padding: 0 10%;

  overflow: hidden;
  z-index: 1;
  pointer-events: auto;

  & > ul {
    // 식단표 중앙정렬을 위한 padding
    // display: flex;
    padding-right: 14px;
  }
`;

export const SkeletonMobileCarousels = styled.ul`
  display: flex;
  height: 324px;
  width: 100%;
  background: ${EColor.GRAY};
  border-radius: 22px;
  opacity: 0.2;
  box-shadow: 8px 4px 4px ${EColor.GRAY};
`;

export const SkeletonTitleTextBox = styled.div`
  display: flex;
  flex-direction: column;
  margin: 34px;
`;

export const SkeletonTitleTextMobile = styled.div`
  ${Title2}
  color: ${EColor.GRAY};
  opacity: 0.2;
`;
