import React from "react";
import Container from "../../components/Container";
import Head from "next/head";
import HeroPages from "../../components/HeroPages";

const Inmuebles = () => {
	return (
		<div>
			<Container>
				<Head>
					<title>Wiede y Asociados - Inmuebles</title>
				</Head>
				<HeroPages title={"Inmuebles en alquiler"} />
			</Container>
		</div>
	);
};

export default Inmuebles;
