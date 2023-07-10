import styled from "styled-components";
import { EColor } from "@styles/color";

const end = EColor.GRAD_END;
const start = EColor.GRAD_START;

export const Background = styled.div`
  height: 100vh;
  margin: 0;
  background: linear-gradient(to bottom, ${end}, ${start});
`;
