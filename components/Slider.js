import { useState, useEffect } from "react";
import ModalGallery from "./ModalGallery";

const Slider = (props) => {
	const [modal, setModal] = useState(false);

	const fatured = props.fatured;
	const gallery = props.gallery.slice(1);

	const handleModalSlider = (e) => {
		setModal(true);
	};

	const closeModal = () => {
		setModal(false);
	};

	return (
		<div
			style={{ width: "90%", height: "500px" }}
			className="d-flex justify-center flex-column"
		>
			<div
				id="carouselExampleControls"
				className="carousel slide"
				data-bs-ride="carousel"
			>
				{modal ? (
					<div>
						<button
							className="btn btn-primary  btn-cerrar"
							onClick={closeModal}
						>
							X Cerrar Ampliación
						</button>
						<ModalGallery fatured={fatured} gallery={gallery} />
					</div>
				) : (
					false
				)}
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
			<button
				className="btn btn-primary d-flex justify-content-center align-items-center gap-2"
				onClick={handleModalSlider}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="16"
					height="16"
					fill="currentColor"
					class="bi bi-arrows-fullscreen"
					viewBox="0 0 16 16"
				>
					<path
						fill-rule="evenodd"
						d="M5.828 10.172a.5.5 0 0 0-.707 0l-4.096 4.096V11.5a.5.5 0 0 0-1 0v3.975a.5.5 0 0 0 .5.5H4.5a.5.5 0 0 0 0-1H1.732l4.096-4.096a.5.5 0 0 0 0-.707zm4.344 0a.5.5 0 0 1 .707 0l4.096 4.096V11.5a.5.5 0 1 1 1 0v3.975a.5.5 0 0 1-.5.5H11.5a.5.5 0 0 1 0-1h2.768l-4.096-4.096a.5.5 0 0 1 0-.707zm0-4.344a.5.5 0 0 0 .707 0l4.096-4.096V4.5a.5.5 0 1 0 1 0V.525a.5.5 0 0 0-.5-.5H11.5a.5.5 0 0 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 0 .707zm-4.344 0a.5.5 0 0 1-.707 0L1.025 1.732V4.5a.5.5 0 0 1-1 0V.525a.5.5 0 0 1 .5-.5H4.5a.5.5 0 0 1 0 1H1.732l4.096 4.096a.5.5 0 0 1 0 .707z"
					/>
				</svg>
				<span>Ampliar</span>
			</button>
		</div>
	);
};

export default Slider;
