import { EColor } from "@styles/color";
import styled from "styled-components";

export const BackgroundBlur = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* 투명도 조절 가능 */
  z-index: 4; /* 배경을 모달 아래에 배치합니다. */
`;

export const FloatingBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 24px;
  left: 18px;
  width: 40px;
  height: 40px;
  border-radius: 50px;
  background-color: ${EColor.TEXT_200};
  border-style: none;
  box-shadow: 5px 5px 10px;
  z-index: 6;
`;

export const FloatingItemContainer = styled.div`
  position: absolute;
  top: 24px;
  left: 20px;
  width: 150px;
  z-index: 5;
`;
