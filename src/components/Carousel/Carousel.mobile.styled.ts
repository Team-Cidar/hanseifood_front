import { EColor } from "@styles/color";
import { Title4_2, body3 } from "@styles/font";
import styled from "styled-components";

export const MobileContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 100%;
`;

export const MobileCarouselItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 212px;
  padding: 16px 16px 8px 16px;
  border: 1px dashed black;
  flex: none;
  object-fit: contain;

  // 식단표 중앙정렬을 위한 margin
  margin-left: 12px;
  box-shadow: 0 3px 3px ${EColor.TEXT_400};
  border-radius: 22px;
`;

export const MobileCarouselWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 232px;
  border-radius: 36px;
  padding: 0% 20%;
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
  margin-bottom: 8px;
  display: flex;
  justify-content: center;
  padding: 4px;
  border: 1px dashed ${EColor.TEXT_900};
  border-width: 0px 0px 1px 0px;
`;

export const MobileMenuList = styled.p`
  display: flex;
  text-align: center;
  ${body3}
  color: ${EColor.TEXT_800};
  white-space: normal;
  line-height: 24px;
`;
