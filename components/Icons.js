import React from "react";

const Icons = () => {
	return (
		<div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 mb-5 mt-5">
			<div className="col d-flex justify-content-center align-items-center flex-column">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="60"
					height="60"
					fill="currentColor"
					style={{ color: "#9a9a9a" }}
					viewBox="0 0 16 16"
				>
					<path
						fillRule="evenodd"
						d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6zm5-.793V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"
					/>
					<path
						fillRule="evenodd"
						d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"
					/>
				</svg>
				<h5>Del lado de tus intereses </h5>
				<p className="text-center">
					Somos representantes de tus intereses, no intermediarios.
				</p>
			</div>
			<div className="col d-flex justify-content-center align-items-center flex-column">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="60"
					height="60"
					fill="currentColor"
					style={{ color: "#9a9a9a" }}
					viewBox="0 0 16 16"
				>
					<path d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13h-5a.5.5 0 0 1-.46-.302l-.761-1.77a1.964 1.964 0 0 0-.453-.618A5.984 5.984 0 0 1 2 6zm3 8.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1-.5-.5z" />
				</svg>
				<h5>Innovación</h5>
				<p className="text-center">
					Utilizamos la ultima tecnología de vanguardia.
				</p>
			</div>
			<div className="col d-flex justify-content-center align-items-center flex-column">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="60"
					height="60"
					fill="currentColor"
					style={{ color: "#9a9a9a" }}
					viewBox="0 0 16 16"
				>
					<path d="m8 0 1.669.864 1.858.282.842 1.68 1.337 1.32L13.4 6l.306 1.854-1.337 1.32-.842 1.68-1.858.282L8 12l-1.669-.864-1.858-.282-.842-1.68-1.337-1.32L2.6 6l-.306-1.854 1.337-1.32.842-1.68L6.331.864 8 0z" />
					<path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1 4 11.794z" />
				</svg>
				<h5>Más de 25 años de experiencia</h5>
				<p className="text-center">
					Expertos en el rubro inmobiliario de Gdor. Virasoro y alrededores.
				</p>
			</div>
			<div className="col d-flex justify-content-center align-items-center flex-column">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="60"
					height="60"
					fill="currentColor"
					viewBox="0 0 16 16"
					style={{ color: "#9a9a9a" }}
				>
					<path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
					<path
						fillRule="evenodd"
						d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z"
					/>
					<path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />
				</svg>
				<h5>Asesoramiento Integral</h5>
				<p className="text-center">
					Asesoramiento total y trabajo eficiente desde el minuto 1.
				</p>
			</div>
		</div>
	);
};

export default Icons;
