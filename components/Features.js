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
				{props.totalSize ? (
					<li className="list-group-item  list-group-item-action">
						Superficie Total: {props.totalSize + "m2"}
					</li>
				) : (
					false
				)}
				{props.coverSize ? (
					<li className="list-group-item  list-group-item-action">
						Superficie Cubierta: {props.coverSize + "m2"}
					</li>
				) : (
					false
				)}
				{props.rooms ? (
					<li className="list-group-item  list-group-item-action">
						Dormitorios: {props.rooms}
					</li>
				) : (
					false
				)}
				{props.bathRooms ? (
					<li className="list-group-item  list-group-item-action">
						Baños: {props.bathRooms}
					</li>
				) : (
					false
				)}
			</ul>
		</div>
	);
};

export default Features;
