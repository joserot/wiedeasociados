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
						<ContactMap />
					</div>
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
