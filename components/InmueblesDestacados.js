import React from "react";
import Cards from "./Cards";

const InmueblesDestacados = (props) => {
	let destacados = [];
	props.inmuebles.forEach((inmueble) => {
		if (inmueble.acf.stand_out === true) {
			destacados.push(inmueble);
		}
	});
	return (
		<div>
			<h2 className="mt-5">Inmuebles Destacados</h2>
			<Cards inmuebles={destacados} />
		</div>
	);
};

export default InmueblesDestacados;
