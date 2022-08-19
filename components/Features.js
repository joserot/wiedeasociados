import React from "react";

const Features = (props) => {
	return (
		<div style={{ width: "90%", height: "auto" }} className="mt-3">
			<ul className="list-group ">
				<li className="list-group-item  list-group-item-action">
					Precio: {props.price}
				</li>
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
