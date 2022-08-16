import Cards from "./Cards";
import API_INMUEBLES from "../helpers/api";
import { useState, useEffect } from "react";
import Loader from "./Loader";

const RelatedInmuebles = (props) => {
	const type = props.type;
	const id = props.id;
	const [relateds, setRelateds] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		setIsLoading(true);
		fetch(API_INMUEBLES)
			.then((res) => res.json())
			.then((data) => {
				let dataRelated = [];
				data.forEach((inmueble) => {
					if (inmueble.acf.type === type) {
						if (inmueble.id !== id) {
							dataRelated.push(inmueble);
						}
					}
				});
				setRelateds(dataRelated);
				setIsLoading(false);
			});
	}, []);

	return (
		<div>
			{isLoading ? (
				<Loader />
			) : (
				<div>
					{" "}
					{relateds.length > 0 ? (
						<div>
							<h3>Inmuebles relacionados</h3>
							<Cards inmuebles={relateds} />
						</div>
					) : (
						false
					)}
				</div>
			)}
		</div>
	);
};

export default RelatedInmuebles;
