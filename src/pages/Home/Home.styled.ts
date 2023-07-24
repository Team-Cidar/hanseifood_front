import styled from "styled-components";
import { EColor } from "@styles/color";

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
  width: 600px;
  height: 600px;
  background: ${EColor.TEXT_200};
  border-radius: 50px;
  box-shadow: 5px 5px 5px ${EColor.TEXT_400};
  padding: 48px;
`;

export const TitleText = styled.div`
  font-size: 32px;
  font-weight: 900;
  color: ${EColor.COLOR_PRIMARY};
`;
