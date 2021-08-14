import styled from 'styled-components';

import { ScreenText } from '../../displays.styles';

export const InfoArea = styled.div`
	width: 100%;
	display: grid;
	gap: 8px;
`;

export const PokeInfoTitle = styled.div`
	${ScreenText}
	display: flex;
	font-size: 16px;
	color: #000000;
	padding: 12px;
	grid-column-start: 1;
	grid-column-end: 4;
	grid-row-start: 1;
`;

export const PokeInfoImageWrapper = styled.div`
	${ScreenText}
	display: flex;
	width: 142px;
	font-size: 16px;
	color: #000000;
	padding: 20px;
	display: flex;
	align-items: center;
	justify-content: center;
	grid-column-start: 1;
	grid-column-end: 2;
	grid-row-start: 2;
	grid-row-end: 4;
`;

export const PokeDescWrapper = styled.div`
	${ScreenText}
	display: flex;
	font-size: 16px;
	color: #000000;
	padding: 16px;
	grid-column-start: 2;
	grid-column-end: 4;
	grid-row-start: 2;
	height: 100px;
	overflow: auto;
`;

export const PokeInfoWrapper = styled.div`
	${ScreenText}
	font-size: 16px;
	color: #000000;
	padding: 16px;
	grid-column-start: 2;
	grid-column-end: 4;
	grid-row-start: 3;
	grid-row-end: 8;
	display: flex;
	flex-direction: column;
	height: 20vh;
	overflow: auto;
`;

export const PokeStatus = styled.div`
	display: flex;
	flex-direction: row;
	width: 100%;
	justify-content: space-between;
`;

export const PokeType = styled.div`
	display: flex;
	flex-direction: row;
	width: 100%;
	justify-content: flex-end;
	display: flex;
	flex-direction: column;
	grid-column-start: 1;
	grid-column-end: 2;
	grid-row-start: 4;
	grid-row-end: 5;
`;
