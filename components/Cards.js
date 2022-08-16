import React from "react";
import Card from "./Card";
import Loader from "./Loader";

const Cards = (props) => {
	return (
		<div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">
			{props.inmuebles.map((inmueble) => {
				return (
					<div key={inmueble.id} className="col">
						<Card inmueble={inmueble} />
					</div>
				);
			})}
		</div>
	);
};

export default Cards;
