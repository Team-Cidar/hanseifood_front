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

export const CardView = styled.div`
  width: 592px;
  height: 584px;
  background: ${EColor.TEXT_200};
  border-radius: 50px;
  box-shadow: 8px 4px 4px ${EColor.TEXT_400};
  padding: 48px;
`;

export const TitleText = styled.div`
  ${Title1}
  color: ${EColor.COLOR_PRIMARY};
`;