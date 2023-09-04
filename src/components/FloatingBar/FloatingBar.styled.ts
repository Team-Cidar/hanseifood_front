import { EColor } from "@styles/color";
import styled from "styled-components";

export const BackgroundBlur = styled.div<{ isVisible: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* 투명도 조절 가능 */
  z-index: 2; /* 배경을 모달 아래에 배치합니다. */
  display: ${(props) => (props.isVisible ? "block" : "none")};
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
  background-color: ${EColor.WHITE};
  border-style: none;
  box-shadow: 5px 5px 10px;
  z-index: 3;
`;

export const FloatingItemContainer = styled.div`
  position: absolute;
  top: 80px;
  left: 20px;
  z-index: 3;
  border-radius: 30%;
`;
