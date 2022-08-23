import React from "react";
import Container from "../components/Container";
import HeroHome from "../components/HeroHome";
import Icons from "../components/Icons";
import InmueblesDestacados from "../components/InmueblesDestacados";
import API_INMUEBLES from "../helpers/api";
import Loader from "../components/Loader";
import { useState, useEffect } from "react";
import Tasaciones from "../components/Tasaciones";

const Index = (props) => {
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		setIsLoading(false);
	}, [props.inmueble]);
	return (
		<div>
			<Container>
				<HeroHome />

				<Tasaciones />
				<Icons />
				<br />
				{isLoading ? (
					<Loader />
				) : (
					<InmueblesDestacados inmuebles={props.inmuebles} />
				)}
				<br />
			</Container>
		</div>
	);
};

Index.getInitialProps = async () => {
	const res = await fetch(API_INMUEBLES);
	const data = await res.json();
	return { inmuebles: data };
};

export default Index;
