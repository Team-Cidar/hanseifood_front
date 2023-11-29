import styled from "styled-components";
import { EColor } from "@styles/color";
import { Title1, Title2, body3, body6, } from "@styles/font";

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
`