// styles.ts

import styled from 'styled-components';
import { EColor } from '@styles/color';
import { Title2 } from '@styles/font';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	gap: 12px;
	height: 90vh;
	padding: 24px 24px 0px 24px;
`;

export const Body  = styled.div`
	overflow: scroll;
	padding: 12px;
`;

export const Logo = styled.div`
  color: ${EColor.COLOR_PRIMARY};
  ${Title2};
`;