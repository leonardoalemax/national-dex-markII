import styled from 'styled-components';

import { ScreenText } from '../../displays.styles';

export const InfoArea = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 8px;
	height: 0;
	overflow: hidden;

	transition: height 0.5s ease-in-out;

	&.selected {
		height: 100%;
	}
`;

export const PokeView = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	gap: 8px;
`;

export const PokeViewRight = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 8px;
`;

export const PokeViewLeft = styled.div`
	width: 142px;
`;

export const PokeInfoTitle = styled.div`
	${ScreenText}
	display: flex;
	width: 100%;
	font-size: 14px;
	color: #000000;
	padding: 12px;
`;

export const PokeInfoImageWrapper = styled.div`
	${ScreenText}
	display: flex;
	width: 142px;
	font-size: 14px;
	color: #000000;
	padding: 20px;
	align-items: center;
	justify-content: center;
`;

export const PokeDescWrapper = styled.div`
	${ScreenText}
	display: flex;
	font-size: 14px;
	color: #000000;
	padding: 14px;
	height: 100px;
	overflow: auto;
`;

export const PokeInfoWrapper = styled.div`
	${ScreenText}
	font-size: 14px;
	color: #000000;
	padding: 14px;
	display: flex;
	flex-direction: column;
	height: 100%;
	overflow: auto;
`;

export const PokeStatus = styled.div`
	display: flex;
	flex-direction: row;
	width: 100%;
	justify-content: space-between;
`;

export const PokeType = styled.div`
	width: 100%;
	justify-content: flex-end;
	display: flex;
	flex-direction: column;
`;
