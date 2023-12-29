// styles.ts

import styled from 'styled-components';
import { EColor } from '@styles/color';
import { Title2 } from '@styles/font';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	gap: 12px;
	height: 84vh;
	padding: 24px;
`

export const Logo = styled.div`
  color: ${EColor.COLOR_PRIMARY};
  ${Title2};
`;

export const Button = styled.button`
  padding: 8px 16px;
  background-color: ${EColor.COLOR_PRIMARY};
  color: #fff;
  cursor: pointer;
  border: none;
  border-radius: 4px;
  position: absolute;
  top: 24px;
  right: 24px;
`;
