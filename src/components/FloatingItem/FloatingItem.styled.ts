import { EColor } from "@styles/color";
import styled from "styled-components";

import { Title5 } from "@styles/font";

export const FloatingItemWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 0 5px;
  margin: 20px 0;
  width: 130px;
  height: 40px;
  z-index: 3;
  background-color: ${EColor.WHITE};
  box-shadow: 5px 5px 10px;

  border-radius: 24px;
`;

export const FloatingItemBtn = styled.button`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: none;
  margin-right: 10px;
  // opacity: 0.8;
  z-index: 4;
  background-color: ${EColor.WHITE};
`;

export const FloatingItemTitle = styled.span`
  z-index: 4;
  ${Title5}
`;
