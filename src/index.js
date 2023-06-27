import React from "react";
import ReactDOM from "react-dom";
const favStad = <h1>Mijn favoriete stad is Enschede!</h1>;
const favBoek = (
	<h2>Mijn favoriete boek is 'Kanonnen van Augustus' van Barbara Tuchmann</h2>
);
ReactDOM.render(favStad + " " + favBoek, document.getElementById("divResult"));
