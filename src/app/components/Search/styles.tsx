import styled from "styled-components";

import { LightHover, Light, Screen } from "../../displays.styles";

export const PokeButton = styled.button`
	${Light}

	margin-left: 8px;
	border-radius: 60px;
	width: 36px;
	cursor: pointer;
	color: #fff;

	&:hover {
		${LightHover}
		border-radius: 60px;
		width: 36px;
	}
`;

export const DisplayInput = styled.input`
	${Screen}

	font-size: 16px;
	width: 100%;

	&:focus {
		outline: none;
	}
`;

export const SearchArea = styled.div`
	width: 100%;
	margin: 24px 0 12px 0;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`;
