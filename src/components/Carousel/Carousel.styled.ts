import { EColor } from "@styles/color";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 48px auto;
  width: 100%;
`;

export const CarouselWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 420px;
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

export const SwipeLeftBtn = styled.button`
  position: absolute;
  width: 24px;
  height: 28px;
  top: 45%;
  left: 0%;
  display: block;
  z-index: 1; // 컴포넌트들 중 가장 위에 위치!
`;

export const SwipeRightBtn = styled.button`
  position: absolute;
  width: 24px;
  height: 28px;
  top: 45%;
  right: 0%;
  display: block;
  z-index: 1;
`;

export const Carousels = styled.ul`
  display: flex;
  width: 100%;
`;

export const CarouselItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background: #82aef5;

  width: 100%;
  height: 400px;

  flex: none;
  object-fit: contain;

  // 식단표 중앙정렬을 위한 margin
  margin-left: 14px;
  box-shadow: 8px 4px 4px grey;
`;

export const Date = styled.h2``;

export const Menu = styled.div``;

export const MenuList = styled.p`
  list-style: square;
`;
