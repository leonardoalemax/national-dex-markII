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

	&::-webkit-scrollbar {
		background-color: transparent;
		width: 16px;
		border-radius: 10px;
	}

	&::-webkit-scrollbar-track {
		background-color: transparent;
	}
	&::-webkit-scrollbar-track:hover {
		background-color: #7fda54;
		border-radius: 20px;
	}

	&::-webkit-scrollbar-thumb {
		background-color: rgba(52, 90, 34, 0.6);
		border-radius: 16px;
		border: 5px solid #7fda54;
	}
	&::-webkit-scrollbar-thumb:hover {
		background-color: rgba(52, 90, 34, 0.8);
		border: 4px solid #7fda54;
	}

	&::-webkit-scrollbar-button {
		display: none;
	}
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

	&::-webkit-scrollbar {
		background-color: transparent;
		width: 16px;
		border-radius: 10px;
	}

	&::-webkit-scrollbar-track {
		background-color: transparent;
	}
	&::-webkit-scrollbar-track:hover {
		background-color: #dbcdab;
		border-radius: 20px;
	}

	&::-webkit-scrollbar-thumb {
		background-color: rgba(0, 0, 0, 0.6);
		border-radius: 16px;
		border: 5px solid #dbcdab;
	}
	&::-webkit-scrollbar-thumb:hover {
		background-color: rgba(0, 0, 0, 0.8);
		border: 4px solid #dbcdab;
	}

	&::-webkit-scrollbar-button {
		display: none;
	}
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
