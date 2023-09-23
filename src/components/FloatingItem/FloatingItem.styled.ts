import { EColor } from "@styles/color";
import styled, { keyframes, css } from "styled-components";

import { Title5 } from "@styles/font";
interface AnimationProps {
  $isActive: boolean;
  $delay: number;
}

// Floating Item 활성화(플로팅 메뉴 열기)
const FloatingItemDownAnimation = (delay: number) => keyframes`
  0% {
    opacity: 0;
    transform: translateY(${-15 * delay}px);
  }
  100% {
    opacity: 1;
    transform: translateY(${40 + delay * 10}px);
  }
`;

// Floating Item 비활성화(플로팅 메뉴 닫기)
const FloatingItemUpAnimation = (delay: number) => keyframes`
  0% {
    opacity: 1;
    transform: translateY(${40 + delay * 10}px);
    
  }
  100% {
    opacity: 0;
    transform: translateY(0px);
  }
`;

// 컴포넌트에 애니메이션 속성을 추가하는 함수
const animation = (isActive: boolean, delay: number) => css`
  ${isActive &&
  css`
    animation: ${FloatingItemDownAnimation(delay)} ${0.1 + delay / 8}s
      ease-in-out forwards;
  `}

  ${!isActive &&
  css`
    animation: ${FloatingItemUpAnimation(delay)} ${0.8 / delay}s ease-in-out
      forwards;
  `}
`;

// 스타일드 컴포넌트 정의
export const FloatingItemWrapper = styled.div<AnimationProps>`
  display: flex;
  align-items: center;
  padding: 0 5px;
  margin: 20px 0;
  width: 130px;
  height: 40px;
  z-index: 3;
  background-color: ${EColor.TEXT_200};
  box-shadow: 5px 5px 10px;
  border-radius: 24px;

  ${(props) => animation(props.$isActive, props.$delay)}
`;

export const FloatingItemBtn = styled.button`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: none;
  margin-right: 10px;
  // opacity: 0.8;
  z-index: 4;
  background-color: ${EColor.TEXT_200};
`;

export const FloatingItemTitle = styled.span`
  z-index: 4;
  ${Title5}
`;
