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
					Categoría: {props.type}
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
						<svg
							viewBox="0 0 640 512"
							xmlns="http://www.w3.org/2000/svg"
							width={25}
							style={{
								marginRight: "0.5rem",
							}}
						>
							<path d="M176 256c44.11 0 80-35.89 80-80s-35.89-80-80-80-80 35.89-80 80 35.89 80 80 80zm352-128H304c-8.84 0-16 7.16-16 16v144H64V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v352c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16v-48h512v48c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16V240c0-61.86-50.14-112-112-112z" />
						</svg>
						<span>: {props.rooms}</span>
					</li>
				) : (
					false
				)}
				{props.bathRooms ? (
					<li className="list-group-item  list-group-item-action">
						<svg
							viewBox="0 0 512 512"
							xmlns="http://www.w3.org/2000/svg"
							width={25}
							style={{
								marginRight: "0.5rem",
							}}
						>
							<path d="M32 384c0 28.32 12.49 53.52 32 71.09V496C64 504.8 71.16 512 80 512h32C120.8 512 128 504.8 128 496v-15.1h256V496c0 8.836 7.164 16 16 16h32c8.836 0 16-7.164 16-16v-40.9c19.51-17.57 32-42.77 32-71.09V352H32V384zM496 256H96V77.25C95.97 66.45 111 60.23 118.6 67.88L132.4 81.66C123.6 108.6 129.4 134.5 144.2 153.2C137.9 159.5 137.8 169.8 144 176l11.31 11.31c6.248 6.248 16.38 6.248 22.63 0l105.4-105.4c6.248-6.248 6.248-16.38 0-22.63l-11.31-11.31c-6.248-6.248-16.38-6.248-22.63 0C230.7 33.26 204.7 27.55 177.7 36.41L163.9 22.64C149.5 8.25 129.6 0 109.3 0C66.66 0 32 34.66 32 77.25v178.8L16 256C7.164 256 0 263.2 0 272v32C0 312.8 7.164 320 16 320h480c8.836 0 16-7.164 16-16v-32C512 263.2 504.8 256 496 256z" />
						</svg>
						<span>: {props.bathRooms}</span>
					</li>
				) : (
					false
				)}
			</ul>
		</div>
	);
};

export default Features;
