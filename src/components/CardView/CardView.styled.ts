import styled from "styled-components";
import { EColor } from "@styles/color";

export const StyledView = styled.div`
  position: relative;
  width: 592px;
  height: 584px;
  background: ${EColor.TEXT_200};
  border-radius: 50px;
  box-shadow: 8px 4px 4px ${EColor.TEXT_400};
  padding: 48px;
`;