import styled from "styled-components";
import { EColor } from "@styles/color";
import { Title2, body4 } from "@styles/font";

export const Logo = styled.div`
	color: ${EColor.COLOR_PRIMARY};
	${Title2};
`

export const Subtitle = styled.div`
	color: ${EColor.TEXT_700};
	${body4};
`

export const LogoView = styled.div`
	display: flex;
	flex-direction: column;
`
