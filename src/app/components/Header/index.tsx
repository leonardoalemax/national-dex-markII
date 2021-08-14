import * as React from "react";
import { HeaderArea } from "./styles";
import { PinYellow, Pins } from "../../app.styles";
import Logo from "../../images/logo.png";

const Header: React.FC = () => {
	return (
		<HeaderArea>
			<Pins>
				<PinYellow />
				<PinYellow />
				<PinYellow />
			</Pins>

			<img src={Logo} alt='pokedex' />
		</HeaderArea>
	);
};

export default Header;
