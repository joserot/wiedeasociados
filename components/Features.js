import React from "react";

const Features = (props) => {
	let price = props.price;

	return (
		<div style={{ width: "90%", height: "auto" }}>
			<ul className="list-group mt-3">
				{" "}
				{props.price === null || props.price === undefined ? (
					false
				) : (
					<li className="list-group-item  list-group-item-action">
						Precio: {price}{" "}
					</li>
				)}
				<li className="list-group-item  list-group-item-action">
					{" "}
					Ubicación: {props.location}
				</li>
				<li className="list-group-item  list-group-item-action">
					{" "}
					Tipo: {props.type}
				</li>
			</ul>
		</div>
	);
};

export default Features;
