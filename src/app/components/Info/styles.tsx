import styled from "styled-components";

import { ScreenText } from "../../displays.styles";

export const InfoArea = styled.div`
	width: 100%;
	display: grid;
`;

export const PokeInfoTitle = styled.div`
	${ScreenText}
	display: flex;
	font-size: 16px;
	color: #000000;
	padding: 12px;
`;

export const PokeInfoWrapper = styled.div`
	${ScreenText}
	display: flex;
	font-size: 16px;
	color: #000000;
	padding: 48px;
`;
