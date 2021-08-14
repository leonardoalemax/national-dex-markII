import * as React from "react";
import { InfoArea, PokeInfoTitle, PokeInfoWrapper } from "./styles";

const Info: React.FC = () => {
	return (
		<InfoArea>
			<PokeInfoTitle>#133 - Eevee</PokeInfoTitle>
			<PokeInfoWrapper></PokeInfoWrapper>
		</InfoArea>
	);
};

export default Info;
