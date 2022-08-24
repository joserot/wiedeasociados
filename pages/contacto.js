import React from "react";
import Container from "../components/Container";
import Head from "next/head";
import HeroPages from "../components/HeroPages";
import ContactForm from "../components/ContactForm";
import ContactMap from "../components/ContactMap";
import About from "../components/About";

const Contacto = () => {
	return (
		<div>
			<Container>
				<Head>
					<title>Wiede y Asociados - Contacto</title>
				</Head>
				<HeroPages title={"Tasaciones"} />
				<div className="row row-cols-1 row-cols-md-2 mt-5 mb-5">
					<div className="col">
						<ContactForm />
					</div>
					<div className="col">
						<h3>UN NEGOCIO EXITOSO</h3>
						<p>
							Sabemos que la correcta tasación de una propiedad determinará el
							éxito de una operación.
						</p>
						<p>
							La tasación es el punto de equilibrio donde intervienen las
							características edilicias, superficie, ubicación y entorno de una
							propiedad.
						</p>
						<p>
							Nuestra experiencia y conocimiento del mercado nos permiten
							también proyectarnos sobre las variaciones que van modificando y
							revalorizando a distintas zonas de la ciudad.
						</p>
					</div>
				</div>
				<div className="mt-5">
					<ContactMap />
				</div>
				<br />
				<br />
				<br />
				<About />
				<br />
				<br />
				<br />
			</Container>
		</div>
	);
};

export default Contacto;
