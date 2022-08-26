import Container from "../../../components/Container";
import API_INMUEBLES from "../../../helpers/api";
import Slider from "../../../components/Slider";
import Features from "../../../components/Features";
import LocationInmueble from "../../../components/LocationInmueble";
import Hero from "../../../components/Hero";
import RelatedInmuebles from "../../../components/RelatedInmuebles";
import ButtonContact from "../../../components/ButtonContact";
import { useState, useEffect } from "react";
import Loader from "../../../components/Loader";

const SingleInmueble = (props) => {
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		setIsLoading(false);
	}, [props.inmueble]);

	const title = props.inmueble.title.rendered;
	const featuredImageUrl = props.inmueble.acf_photo_gallery[0].full_image_url;
	const location = props.inmueble.acf.location;
	const type = props.inmueble.acf.type;
	const mapLocation = props.inmueble.acf.map_location;
	const description = props.inmueble.acf.description;
	const gallery = [];
	const totalSize = props.inmueble.acf.superficie_total;
	const coverSize = props.inmueble.acf.superficie_cubierta;
	const rooms = props.inmueble.acf.numero_de_dormitorios;
	const bathRooms = props.inmueble.acf.numero_de_banos;
	const pushGallery = () => {
		props.inmueble.acf_photo_gallery.forEach((el) => {
			gallery.push(el.full_image_url);
		});
	};
	pushGallery();
	const getPrice = () => {
		const price = new Intl.NumberFormat("en-US", {
			style: "currency",
			currency: "USD",
		}).format(props.inmueble.acf.price);
		return price;
	};

	return (
		<Container>
			{isLoading ? (
				<Loader />
			) : (
				<div>
					<Hero title={title} />

					<div className="row row-cols-1 row-cols-md-2 ">
						<div
							className="col d-flex justify-content-center mb-5"
							style={{ height: "500px" }}
						>
							<Slider gallery={gallery} fatured={featuredImageUrl} />
						</div>
						<div className="col">
							<Features
								location={location}
								type={type}
								price={getPrice()}
								totalSize={totalSize}
								coverSize={coverSize}
								rooms={rooms}
								bathRooms={bathRooms}
							/>
							<ButtonContact title={title} />
						</div>
					</div>
					<div className="row row-cols-1 mt-5">
						<h3>Descripción</h3>
						<div dangerouslySetInnerHTML={{ __html: description }}></div>
					</div>
					<div className="row row-cols-1 mt-5">
						<LocationInmueble location={mapLocation} />
						<div className="d-flex justify-content-center">
							<ButtonContact title={title} />
						</div>
					</div>
					<div className="row row-cols-1 mt-5">
						<RelatedInmuebles id={props.inmueble.id} type={type} />
					</div>
				</div>
			)}
		</Container>
	);
};

SingleInmueble.getInitialProps = async (ctx) => {
	const res = await fetch(API_INMUEBLES + `/${ctx.query.id}`);
	const data = await res.json();
	return { inmueble: data };
};

export default SingleInmueble;
