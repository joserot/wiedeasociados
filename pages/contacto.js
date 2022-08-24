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
				<HeroPages title={"Contacto"} />
				<div className="row row-cols-1 row-cols-md-2 mt-5 mb-5">
					<div className="col">
						<ContactForm />
					</div>
					<div className="col">
						<h3>Asesoramiento Integral</h3>
						<p
							style={{
								fontSize: "1.2rem",
							}}
						>
							Completa el siguiente formulario o contactános vía WhatsApp
							directo. Nos esforzamos día a día como inmobiliaria buscando ser
							los mejores para asesorarte, hace tu consulta con confianza
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
