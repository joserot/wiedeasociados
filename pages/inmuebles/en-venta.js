import React from "react";
import Container from "../../components/Container";
import Head from "next/head";
import HeroPages from "../../components/HeroPages";
import API_INMUEBLES from "../../helpers/api";
import Filters from "../../components/Filters";
import { useState, useEffect } from "react";
import Loader from "../../components/Loader";

const Inmuebles = (props) => {
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		setIsLoading(false);
	}, [props.inmuebles]);

	return (
		<div>
			<Container>
				<Head>
					<title>Wiede y Asociados - Inmuebles</title>
				</Head>
				<HeroPages title={"Inmuebles en venta"} />
				{isLoading ? <Loader /> : <Filters inmuebles={props.inmuebles} />}
			</Container>
		</div>
	);
};

Inmuebles.getInitialProps = async () => {
	const res = await fetch(API_INMUEBLES);
	const data = await res.json();

	return { inmuebles: data };
};

export default Inmuebles;
