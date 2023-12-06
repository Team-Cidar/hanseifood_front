import { EColor } from "@styles/color";
import {
  Title1,
  Title2,
  Title3,
  Title4,
  body1,
  body2,
  body3,
  Title4_2,
} from "@styles/font";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin: 50px 50px 50px 0px;
  width: 100%;
`;

export const CarouselWrapper = styled.div`
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
    // 식단표 중앙정렬을 위한 padding
    // display: flex;
    padding-right: 14px;
  }
`;

export const SwipeLeftBtn = styled.div`
  width: 32px;
  height: 32px;
  position: relative;
  justify-content: center;
  align-items: center;
  display: flex;
  z-index: 99;
`;

export const SwipeRightBtn = styled.div`
  width: 32px;
  height: 32px;
  position: relative;
  justify-content: center;
  align-items: center;
  display: flex;
  z-index: 99;
`;

export const Carousels = styled.ul`
  display: flex;
  width: 100%;
`;

export const CarouselItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${EColor.TEXT_400};
  width: 100%;
  height: 324px;
  padding: 42px 24px 4px 24px;

  flex: none;
  object-fit: contain;

  // 식단표 중앙정렬을 위한 margin
  margin-left: 14px;
  box-shadow: 0 3px 3px ${EColor.TEXT_400};
  border-radius: 22px;
`;

export const DateText = styled.h2`
  ${Title3}
  color: ${EColor.TEXT_800};
  margin-bottom: 18px;
`;

export const MenuCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const MenuList = styled.p`
  display: flex;
  text-align: center;
  ${body1}
  color: ${EColor.TEXT_800};
  white-space: normal;
  line-height: 32px;
`;
