import React from "react";
import ReactDOM from "react-dom";
const favStad = <h1>Enschede</h1>;
const favBoek = <h1>Kanonnen van augustus</h1>;
const element = (
	<h2>
		Mijn favoriete stad is {favStad}, mijn favoriete boek is {favBoek}
	</h2>
);
ReactDOM.render(element, document.getElementById("divResult"));
