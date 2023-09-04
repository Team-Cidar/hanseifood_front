import { EColor } from "@styles/color";
import styled from "styled-components";

import { Title5 } from "@styles/font";

export const FloatingItemWrapper = styled.div`
  display: flex;
  align-items: center;
  //   justify-content: start;
  margin: 20px 0;
  width: 150px;
  z-index: 1;
`;

export const FloatingItemBtn = styled.button`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: none;
  margin-right: 10px;
  opacity: 0.8;
  box-shadow: 3px 3px 5px;

  background-color: ${EColor.WHITE};
`;

export const FloatingItemTitle = styled.span`
  ${Title5}
`;
