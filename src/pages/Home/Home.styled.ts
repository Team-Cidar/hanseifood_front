import styled from "styled-components";
import { EColor } from "@styles/color";
import { Title2, body4 } from "@styles/font";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	gap: 12px;
	height: 90vh;
	padding: 24px;
`;

export const Logo = styled.div`
	color: ${EColor.COLOR_PRIMARY};
	${Title2};
`;

export const Subtitle = styled.div`
	color: ${EColor.TEXT_700};
	${body4};
`;

export const LogoView = styled.div`
	display: flex;
	flex-direction: column;
`;

export const CarouselView = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
	width: 100%;
`;
export const TicketView = styled.div`
	display: flex;
	flex-direction: column;
	padding: 12px 18px 12px 18px;
	gap: 8px;
	width: 100%;
	justify-content: center;
	border: 1.5px dashed ${EColor.TEXT_900};
	border-radius: 18px;
`;
export const CarouselViewBottom = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0px 30px 8px 30px;
`;

export const ToggleLabel = styled.div`
	color: ${EColor.COLOR_INTERACTION};
	${body4};
`;