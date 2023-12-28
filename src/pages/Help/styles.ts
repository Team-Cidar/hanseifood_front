import { EColor } from "@styles/color";
import { Title5 } from "@styles/font";
import styled from "styled-components";

export const Background = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
  background:
  linear-gradient(
    to bottom left,
    ${EColor.GRAD_TR},
    ${EColor.GRAD_BR},
    ${EColor.GRAD_TL},
    ${EColor.GRAD_BL}
  );
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const ImageView = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
`;

export const Gif = styled.img`
  width: 232px;
  height: 100%;
  border-radius: 24px;
`;

export const TextView = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StyledText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  ${Title5}
`;

export const StyledScroll = styled.div`
  width: 100%;
  height: 522px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;
  scrollbar-width: none; /* Firefox에서 스크롤바를 숨기기 위한 속성 */
  -ms-overflow-style: none; /* Internet Explorer에서 스크롤바를 숨기기 위한 속성 */
  &::-webkit-scrollbar {
    display: none;
  }
`;