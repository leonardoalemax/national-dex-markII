import styled from 'styled-components';

import { Screen } from '../../displays.styles';

export const DisplayArea = styled.div`
	${Screen}
	height: 25vh;
	overflow-y: auto;
	overflow-x: hidden;
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

	&.selected {
		background: rgba(52, 90, 34, 0.8);
	}

	img {
		filter: brightness(0) invert(0);
		height: 24px;
	}
`;

export const PokeNumber = styled.div`
	font-family: 'Visitor';
	color: #000;
	min-width: 38px;
	text-align: left;
	margin: 0 2px;
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
	color: #eee;
	background: #736e76;
	border-radius: 10px;
	padding: 2px;
	margin: 0 8px;
	text-align: center;
	width: 100%;
	max-width: 240px;

	&.normal {
		background-color: #a8a77aaa;
	}
	&.fire {
		background-color: #ee4d30aa;
	}
	&.water {
		background-color: #6390f0aa;
	}
	&.electric {
		background-color: #f7d02caa;
	}
	&.grass {
		background-color: #30521daa;
	}
	&.ice {
		background-color: #96d9d6aa;
	}
	&.fighting {
		background-color: #c22e28aa;
	}
	&.poison {
		background-color: #a33ea1aa;
	}
	&.ground {
		background-color: #e2bf65aa;
	}
	&.flying {
		background-color: #a98ff3aa;
	}
	&.psychic {
		background-color: #f95587aa;
	}
	&.bug {
		background-color: #a6b91aaa;
	}
	&.rock {
		background-color: #b6a136aa;
	}
	&.ghost {
		background-color: #735797aa;
	}
	&.dragon {
		background-color: #6f35fcaa;
	}
	&.dark {
		background-color: #705746aa;
	}
	&.steel {
		background-color: #b7b7ceaa;
	}
	&.fairy {
		background-color: #d685adaa;
	}
`;
