import { EColor } from "@styles/color";
import { Title3, body2, Title4_2, Title4, Title5 } from "@styles/font";
import styled from "styled-components";

export const MobileContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 324px;
`;

export const MobileCarouselItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${EColor.TEXT_400};
  width: 100%;
  height: 324px;
  padding: 42px 16px 4px 16px;

  flex: none;
  object-fit: contain;

  // 식단표 중앙정렬을 위한 margin
  margin-left: 14px;
  box-shadow: 0 3px 3px ${EColor.TEXT_400};
  border-radius: 22px;
`;

export const MobileCarouselWrapper = styled.div`
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

export const MobileDateText = styled.h2`
  ${Title4_2}
  color: ${EColor.TEXT_800};
  margin-bottom: 14px;
`;

export const MobileMenuList = styled.p`
  display: flex;
  text-align: center;
  ${body2}
  color: ${EColor.TEXT_800};
  white-space: normal;
  line-height: 28px;
`;
