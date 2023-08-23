import { EColor } from "@styles/color";
import styled from "styled-components";

export const MobileContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 324px;
`

export const MobileCarouselItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #a3b3c9;
  width: 100%;
  height: 294px;

  flex: none;
  object-fit: contain;

  // 식단표 중앙정렬을 위한 margin
  margin-left: 14px;
  box-shadow: 8px 4px 4px ${EColor.TEXT_400};
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
`