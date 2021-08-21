import styled from 'styled-components';

import { PinOut, Light } from './displays.styles';

export const AppCanvas = styled.div`
	max-width: 420px;
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
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
	margin: 4px 0px;

	&.normal {
		background-color: #a8a77a;
	}
	&.fire {
		background-color: #ee4d30;
	}
	&.water {
		background-color: #6390f0;
	}
	&.electric {
		background-color: #f7d02c;
	}
	&.grass {
		background-color: #30521d;
	}
	&.ice {
		background-color: #96d9d6;
	}
	&.fighting {
		background-color: #c22e28;
	}
	&.poison {
		background-color: #a33ea1;
	}
	&.ground {
		background-color: #e2bf65;
	}
	&.flying {
		background-color: #a98ff3;
	}
	&.psychic {
		background-color: #f95587;
	}
	&.bug {
		background-color: #a6b91a;
	}
	&.rock {
		background-color: #b6a136;
	}
	&.ghost {
		background-color: #735797;
	}
	&.dragon {
		background-color: #6f35fc;
	}
	&.dark {
		background-color: #705746;
	}
	&.steel {
		background-color: #b7b7ce;
	}
	&.fairy {
		background-color: #d685ad;
	}
`;

export const Divisor = styled.div`
	${PinOut}
	background-color: #EE5752;
	padding: 0;
	height: 9px;
	margin: 12px 0;
	border-radius: 10px;
`;
