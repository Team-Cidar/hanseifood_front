import styled from "styled-components";
import { EColor } from "@styles/color";
import { Title1, Title2, body3, body6, } from "@styles/font";

const end = EColor.GRAD_END;
const start = EColor.GRAD_START;

export const Background = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
  background: linear-gradient(to bottom, ${end}, ${start});
`;

export const TitleText = styled.div`
  ${Title1}
  color: ${EColor.COLOR_PRIMARY};
`;

export const TitleTextRight = styled.div`
  position: absolute;
  bottom: 34px;
  right: 28px;
  ${body3}
  color: ${EColor.TEXT_600};
`;

export const TitleTextBox = styled.div`
  display: flex;
  flex-direction: column;
  margin: 34px;
`

export const TitleTextMobile = styled.div`
  ${Title2}
  color: ${EColor.COLOR_PRIMARY};
`;

export const TitleTextMobileRight = styled.div`
  position: absolute;
  bottom: 34px;
  right: 28px;
  ${body6}
  color: ${EColor.TEXT_200};
`;
