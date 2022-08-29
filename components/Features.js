import React from "react";

const Features = (props) => {
	return (
		<div style={{ width: "90%", height: "auto" }} className="mt-3">
			<ul className="list-group ">
				<li className="list-group-item  list-group-item-action py-5 display-6">
					<span
						className="mx-1"
						style={{
							fontWeight: "600",
						}}
					>
						{props.price}
					</span>
				</li>
				<li className="list-group-item  list-group-item-action">
					<b> Ubicación: </b>
					<span
						className="mb-3"
						dangerouslySetInnerHTML={{ __html: props.location }}
					></span>
				</li>
				<li className="list-group-item  list-group-item-action">
					<b>Categoría: </b>
					<span> {props.type}</span>
				</li>
				{props.totalSize ? (
					<li className="list-group-item  list-group-item-action">
						<b>Superficie Total: </b>
						<span> {props.totalSize + "m2"}</span>
					</li>
				) : (
					false
				)}
				{props.coverSize ? (
					<li className="list-group-item  list-group-item-action">
						<b>Superficie Cubierta: </b>
						<span> {props.coverSize + "m2"}</span>
					</li>
				) : (
					false
				)}
				{props.rooms ? (
					<li className="list-group-item  list-group-item-action">
						<b>Dormitorios: </b>
						<span>{props.rooms}</span>
					</li>
				) : (
					false
				)}
				{props.bathRooms ? (
					<li className="list-group-item  list-group-item-action">
						<b>Baños: </b>
						<span> {props.bathRooms}</span>
					</li>
				) : (
					false
				)}
			</ul>
		</div>
	);
};

export default Features;
