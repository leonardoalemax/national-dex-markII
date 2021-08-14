import { css } from 'styled-components';

export const PinIn = css`
	border: 2px solid #4d1616;
	box-shadow: 1px 1px 0px rgba(0, 0, 0, 0.25),
		inset -1px -3px 0px rgba(255, 255, 255, 0.4),
		inset 1px 3px 0px rgba(0, 0, 0, 0.4);
	border-radius: 10px;
	padding: 8px;
`;

export const PinOut = css`
	border: 2px solid #4d1616;
	box-shadow: 1px 1px 0px rgba(0, 0, 0, 0.25),
		inset -1px -3px 0px rgba(0, 0, 0, 0.4),
		inset 1px 4px 0px rgba(255, 255, 255, 0.4);
	border-radius: 10px;
	padding: 8px;
`;

export const Screen = css`
	font-family: 'Visitor';
	background: #7fda54;
	${PinIn}
`;

export const ScreenDisabled = css`
	font-family: 'Visitor';
	background: #798b71;
	${PinIn}
`;

export const ScreenText = css`
	font-family: 'Visitor';
	background: #dbcdab;
	${PinIn}
`;

export const Action = css`
	background: #bf312d;
	${PinOut}
`;

export const ActionDisabled = css`
	background: #9b2724;
	${PinIn}
`;

export const Light = css`
	background: #f6c824;
	${PinOut}
`;

export const LightHover = css`
	background: #f6c824;
	${PinIn}
`;

export const LightOff = css`
	background: #5e6d75;
	${PinOut}
`;
