import styled from "styled-components";
import { EColor } from "@styles/color";

export const CardView = styled.div<{ isMobile: boolean }>`
  width: ${({ isMobile }) => (isMobile ? "80%" : "592px")};
  height: ${({ isMobile }) => (isMobile ? "80vh" : "584px")};
  background: ${EColor.TEXT_200};
  border-radius: 50px;
  box-shadow: 8px 4px 4px ${EColor.TEXT_400};
  padding: ${({ isMobile }) => (isMobile ? "48px 18px" : "48px")};
`;
