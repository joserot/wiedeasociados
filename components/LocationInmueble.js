import React from "react";

const LocationInmueble = (props) => {
	const location = props.location;
	const src = `https://www.google.com/maps/embed/v1/place?key=AIzaSyCzNe1_n-C2f46J1ULOPm0We1wYzibNLx8
            &q=${location.replace(" ", "")}`;
	return (
		<div>
			<h3>Ubicación en el mapa</h3>
			<iframe
				id="map"
				style={{ width: "100%", height: "450px" }}
				loading="lazy"
				allowFullScreen
				referrerPolicy="no-referrer-when-downgrade"
				src={src}
			></iframe>
		</div>
	);
};

export default LocationInmueble;
