import React from "react";
import ReactDOM from "react-dom";
import Display from "./app/components/Display";
import Header from "./app/components/Header";
import Search from "./app/components/Search";
import Info from "./app/components/Info";

import { AppCanvas, Divisor } from "./app/app.styles";

import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
	<React.StrictMode>
		<AppCanvas className='App'>
			<Header />
			<Search />
			<Display />
			<Divisor />
			<Info />
		</AppCanvas>
	</React.StrictMode>,
	document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
