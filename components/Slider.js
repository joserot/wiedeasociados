import React from "react";

const Slider = (props) => {
	const fatured = props.fatured;
	const gallery = props.gallery.slice(1);
	return (
		<div
			id="carouselExampleControls"
			className="carousel slide"
			data-bs-ride="carousel"
			style={{ width: "90%", height: "500px" }}
		>
			<div className="carousel-inner">
				<div key={fatured} className="carousel-item active">
					<img
						src={fatured}
						className="d-block w-100 "
						style={{ width: "90%", height: "500px", objectFit: "cover" }}
					/>
				</div>
				{gallery.map((img) => {
					return (
						<div key={img} className="carousel-item">
							<img
								src={img}
								className="d-block w-100 "
								style={{ width: "90%", height: "500px", objectFit: "cover" }}
							/>
						</div>
					);
				})}
			</div>
			<button
				className="carousel-control-prev"
				type="button"
				data-bs-target="#carouselExampleControls"
				data-bs-slide="prev"
			>
				<span className="carousel-control-prev-icon" aria-hidden="true" />
				<span className="visually-hidden">Previous</span>
			</button>
			<button
				className="carousel-control-next"
				type="button"
				data-bs-target="#carouselExampleControls"
				data-bs-slide="next"
			>
				<span className="carousel-control-next-icon" aria-hidden="true" />
				<span className="visually-hidden">Next</span>
			</button>
		</div>
	);
};

export default Slider;
