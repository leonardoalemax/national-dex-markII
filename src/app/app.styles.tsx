import styled from 'styled-components';

import { PinOut, Light } from './displays.styles';

export const AppCanvas = styled.div`
	max-width: 420px;
	width: 100%;
`;

export const Pins = styled.div`
	display: flex;
	width: 50px;
`;

export const Pin = styled.div`
	width: 13px;
	height: 12px;
`;

export const PinYellow = styled(Pin)`
	${Light}
	margin-left: 2px;
	padding: 0px;
`;

export const Type = styled.span`
	${PinOut}
	background: #736e76;
	color: #fff;
	padding: 6px 12px;
`;

export const Divisor = styled.div`
	${PinOut}
	background-color: #EE5752;
	padding: 0;
	height: 9px;
	margin: 24px 0;
	border-radius: 10px;
`;
