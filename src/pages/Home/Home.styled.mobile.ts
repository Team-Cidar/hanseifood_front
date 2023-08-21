import { EColor } from "@styles/color";
import {
  Title1,
  Title2,
  Title3,
  Title4,
  body1,
  body2,
  body3,
} from "@styles/font";
import styled from "styled-components";

const end = EColor.GRAD_END;
const start = EColor.GRAD_START;

export const BackgroundMobile = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
  background: linear-gradient(to bottom, ${end}, ${start});
`;

export const TitleTextMobile = styled.div`
  ${Title2}
  color: ${EColor.COLOR_PRIMARY};
  text-align: center;
`;
