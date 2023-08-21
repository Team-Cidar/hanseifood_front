import styled from "styled-components";
import { EColor } from "@styles/color";
import { Title1 } from "@styles/font";

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
