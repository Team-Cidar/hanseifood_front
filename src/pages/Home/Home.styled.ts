import styled from "styled-components";
import { EColor } from "@styles/color";
import { Title1, Title2, body3, body4, body6, } from "@styles/font";

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

export const Subtitle = styled.div`
	color: ${EColor.TEXT_700};
	${body4};
`

export const LogoView = styled.div`
	display: flex;
	flex-direction: column;
`

export const CarouselView = styled.div`
	display: flex;
	width: 100%;
	justify-content: center;
	border: 1.5px solid ${EColor.COLOR_PRIMARY};
	border-radius: 36px;
`
export const TicketView = styled.div`
	display: flex;
	width: 100%;
	justify-content: center;
	border: 1.5px solid ${EColor.COLOR_PRIMARY};
	border-radius: 36px;
`