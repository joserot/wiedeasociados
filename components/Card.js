import Link from "next/link";

const Card = (props) => {
	const featuredImageUrl = props.inmueble.acf_photo_gallery[0].full_image_url;
	const title = props.inmueble.title.rendered;
	const type = props.inmueble.acf.type;
	let price;
	const getPrice = () => {
		if (
			props.inmueble.acf.usd_price.length === 0 ||
			props.inmueble.acf.usd_price.length === " "
		) {
			price = new Intl.NumberFormat("en-US", {
				style: "currency",
				currency: "ARS",
			}).format(props.inmueble.acf.pesos_price);
		} else if (
			props.inmueble.acf.pesos_price.length === 0 ||
			props.inmueble.acf.usd_price.length === " "
		) {
			price = new Intl.NumberFormat("en-US", {
				style: "currency",
				currency: "USD",
			}).format(props.inmueble.acf.usd_price);
			price = price + " m2";
		} else {
			price = null;
		}
	};
	getPrice();

	return (
		<Link href={"/inmuebles/en-venta/" + props.inmueble.id}>
			<a
				style={{
					textDecoration: "none",
					color: "inherit",
				}}
			>
				<div className="card">
					<img
						src={featuredImageUrl}
						className="card-img-top"
						style={{
							height: "250px",
							objectFit: "cover",
						}}
					/>
					<div className="card-body">
						<h5 className="card-title">{title}</h5>
						{price === null || price === undefined ? (
							false
						) : (
							<h6 className="card-text">
								{" "}
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="16"
									height="16"
									fill="currentColor"
									className="bi bi-tags-fill"
									viewBox="0 0 16 16"
								>
									<path d="M2 2a1 1 0 0 1 1-1h4.586a1 1 0 0 1 .707.293l7 7a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 2 6.586V2zm3.5 4a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
									<path d="M1.293 7.793A1 1 0 0 1 1 7.086V2a1 1 0 0 0-1 1v4.586a1 1 0 0 0 .293.707l7 7a1 1 0 0 0 1.414 0l.043-.043-7.457-7.457z" />
								</svg>
								{" " + price}
							</h6>
						)}

						<h6 className="card-text">
							{" "}
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="16"
								fill="currentColor"
								className="bi bi-signpost-2-fill"
								viewBox="0 0 16 16"
							>
								<path d="M7.293.707A1 1 0 0 0 7 1.414V2H2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h5v1H2.5a1 1 0 0 0-.8.4L.725 8.7a.5.5 0 0 0 0 .6l.975 1.3a1 1 0 0 0 .8.4H7v5h2v-5h5a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1H9V6h4.5a1 1 0 0 0 .8-.4l.975-1.3a.5.5 0 0 0 0-.6L14.3 2.4a1 1 0 0 0-.8-.4H9v-.586A1 1 0 0 0 7.293.707z" />
							</svg>
							{" " + type}
						</h6>
					</div>
				</div>
			</a>
		</Link>
	);
};

export default Card;
