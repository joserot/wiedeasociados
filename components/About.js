import React from "react";
import SliderAbout from "./SliderAbout";

const About = () => {
	return (
		<div className="w-100 vh-60  d-flex flex-column justify-content-center align-items-center ">
			<div className="row row-cols-1 row-cols-md-2 g-5">
				<div className="col d-flex justify-content-center ">
					<SliderAbout />
				</div>
				<div className="col ">
					<h3>¿Quienes somos?</h3>
					<p>
						Wiede & Asociados es una empresa familiar cuya misión en el mercado
						inmobiliario de Gobernador Virasoro y alrededores es hacer la venta
						simple, asesorando y acompañando al cliente vendedor en cada etapa
						del proceso, Somos representantes de tus intereses y trabajamos de
						manera eficiente desde el minuto 1. Contamos con un equipo capaz y
						una metodología de trabajo que combina los medios digitales y la
						tecnología de vanguardia con la experiencia de nuestros 25 años para
						efectuar cada venta y alcanzar tus objetivos.
					</p>
					<ul className="list-group">
						<li
							className="list-group-item list-group-item-action"
							style={{
								display: "flex",
								justifyContent: "start",
								alignItems: "center",
								gap: "1rem",
							}}
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="16"
								fill="currentColor"
								class="bi bi-telephone"
								viewBox="0 0 16 16"
							>
								<path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
							</svg>
							3756 449478
						</li>
						<li
							className="list-group-item list-group-item-action"
							style={{
								display: "flex",
								justifyContent: "start",
								alignItems: "center",
								gap: "1rem",
							}}
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="16"
								fill="currentColor"
								class="bi bi-envelope"
								viewBox="0 0 16 16"
							>
								<path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
							</svg>
							wiedeyasociados@gmail.com
						</li>
						<li
							className="list-group-item list-group-item-action"
							style={{
								display: "flex",
								justifyContent: "start",
								alignItems: "center",
								gap: "1rem",
							}}
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="16"
								fill="currentColor"
								class="bi bi-geo-alt"
								viewBox="0 0 16 16"
							>
								<path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
								<path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
							</svg>
							Gobernador Ferré 2431
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default About;
