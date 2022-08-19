import React from "react";

const ModalGallery = (props) => {
	const gallery = props.gallery;
	const fatured = props.fatured;
	return (
		<div className="modal-gallery">
			<div className="container-modal-gallery">
				<div
					id="carouselExampleFade"
					className="carousel slide carousel-fade"
					data-bs-ride="carousel"
				>
					<div className="carousel-inner">
						<div className="carousel-item active">
							<img src={fatured} className="d-block w-100" />
						</div>
						{gallery.map((img) => {
							return (
								<div key={img} className="carousel-item">
									<img src={img} className="d-block w-100" />
								</div>
							);
						})}
					</div>
					<button
						className="carousel-control-prev"
						type="button"
						data-bs-target="#carouselExampleFade"
						data-bs-slide="prev"
					>
						<span className="carousel-control-prev-icon" aria-hidden="true" />
						<span className="visually-hidden">Previous</span>
					</button>
					<button
						className="carousel-control-next"
						type="button"
						data-bs-target="#carouselExampleFade"
						data-bs-slide="next"
					>
						<span className="carousel-control-next-icon" aria-hidden="true" />
						<span className="visually-hidden">Next</span>
					</button>
				</div>
			</div>
		</div>
	);
};

export default ModalGallery;
