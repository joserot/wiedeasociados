import React from "react";
import Image from "next/image";
import slide1 from "../public/ofi-1.webp";
import slide2 from "../public/ofi-2.webp";
import slide3 from "../public/ofi-3.webp";
import slide4 from "../public/ofi-4.webp";
import slide5 from "../public/ofi-5.webp";
import slide6 from "../public/ofi-6.webp";
import slide7 from "../public/ofi-7.webp";
import slide8 from "../public/ofi-8.webp";

const SliderAbout = () => {
	return (
		<div
			id="carouselExampleControls"
			className="carousel slide"
			data-bs-ride="carousel"
			style={{ width: "70%", height: "auto" }}
		>
			<div className="carousel-inner">
				<div className="carousel-item active">
					<Image src={slide1} layout="responsive" />
				</div>
				<div className="carousel-item">
					<Image src={slide2} layout="responsive" />
				</div>
				<div className="carousel-item">
					<Image src={slide3} layout="responsive" />
				</div>
				<div className="carousel-item">
					<Image src={slide4} layout="responsive" />
				</div>
				<div className="carousel-item">
					<Image src={slide5} layout="responsive" />
				</div>
				<div className="carousel-item">
					<Image src={slide6} layout="responsive" />
				</div>
				<div className="carousel-item">
					<Image src={slide7} layout="responsive" />
				</div>
				<div className="carousel-item">
					<Image src={slide8} layout="responsive" />
				</div>
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

export default SliderAbout;
