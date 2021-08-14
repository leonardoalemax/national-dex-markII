import styled from 'styled-components';

import { Screen } from '../../displays.styles';

export const DisplayArea = styled.div`
	${Screen}
	height: 200px;

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

export const PokeItem = styled.div`
	display: flex;
	align-items: center;
	font-family: 'Visitor';
	background: rgba(52, 90, 34, 0.2);
	border-radius: 10px;
	padding: 8px;
	margin: 4px 0;
	cursor: pointer;

	&:hover {
		background: rgba(52, 90, 34, 0.4);
	}
`;

export const PokeNumber = styled.div`
	font-family: 'Visitor';
	color: #000;
	min-width: 60px;
	text-align: center;
	margin: 0 8px 0 8px;
`;

export const PokeName = styled.div`
	font-family: 'Visitor';
	color: #000;
	width: 100%;
	text-align: left;
	margin: 0 8px 0 8px;
`;

export const PokeType = styled.div`
	font-family: 'Visitor';
	color: #fff;
	background: #736e76;
	border-radius: 10px;
	padding: 2px 16px;
	margin: 0 8px 0 8px;
`;
