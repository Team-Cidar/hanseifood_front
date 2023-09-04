import { EColor } from "@styles/color";
import styled from "styled-components";

export const FloatingBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 24px;
  left: 18px;
  width: 40px;
  height: 40px;
  border-radius: 50px;
  background-color: ${EColor.WHITE};
  border-style: none;
  box-shadow: 5px 5px 10px;
`;

export const FloatingItemContainer = styled.div`
  position: absolute;
  top: 80px;
  left: 20px;
  z-index: 2;
  border-radius: 30%;
`;
