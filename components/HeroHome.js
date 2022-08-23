import React from "react";
import Link from "next/link";
import Image from "next/image";
import HeroHomeImage from "../public/hero-image-home.webp";
import FormSearch from "./FormSearch";
import HeroPagesImage from "../public/virasoro.webp";

const HeroHome = () => {
	return (
		<section
			className="d-flex flex-column align-items-center  justify-content-center"
			style={{
				height: "65vh",
				width: "100%",
			}}
		>
			<div
				className="mask z-index-2 "
				style={{
					width: "100%",
					height: "100%",
				}}
			>
				<div
					style={{
						width: "100%",
						height: "100%",
						position: "relative",
					}}
				>
					<div
						style={{
							width: "100%",
							height: "100%",
							position: "relative",
							zIndex: "10",
							backgroundColor: "rgba(0, 0, 0, 0.5)",
						}}
						className="d-flex flex-column  justify-content-center align-items-center h-100 "
					>
						<h2 className="text-center text-white display-4">
							Encontremos tu lugar ideal
						</h2>
						<h5 className="text-center text-white ">
							Servicios Inmobiliarios - Gobernador Virasoro y alrededores
						</h5>
						<FormSearch />
					</div>
					<Image
						src={HeroPagesImage}
						layout="fill"
						objectFit="cover"
						alt="Hero Image"
						priority={true}
					/>
				</div>
			</div>
		</section>
	);
};

export default HeroHome;

// <section
// 	className="text-center"
// 	style={{
// 		width: "100%",
// 		height: "50vh",
// 		zIndex: "-2",
// 	}}
// >
// 	<div
// 		className="mask z-index-2"
// 		style={{
// 			width: "100%",
// 			height: "100%",
// 			zIndex: "-10",
// 		}}
// 	>
// 		<div
// 			style={{
// 				width: "100%",
// 				height: "100%",
// 				position: "relative",
// 				zIndex: "10",
// 			}}
// 		>
// 			<div
// 				style={{
// 					width: "100%",
// 					height: "100%",
// 					position: "relative",
// 					zIndex: "10",
// 					backgroundColor: "rgba(0, 0, 0, 0.5)",
// 				}}
// 				className="d-flex justify-content-center align-items-center h-100 "
// 			>
// 				<div className="text-white">
// 					<h1 className="mb-3">Wiede &amp; Asociados</h1>
// 					<h5 className="mb-4">
// 						Servicios Inmobiliarios - Gdor. Virasoro y alrededores
// 					</h5>
// 					<Link href="/inmuebles/en-venta">
// 						<a
// 							className="btn btn-outline-light btn-lg m-2"
// 							role="button"
// 							rel="nofollow"
// 						>
// 							COMPRAR
// 						</a>
// 					</Link>
// 					<Link href="/inmuebles/en-alquiler">
// 						<a className="btn btn-outline-light btn-lg m-2" role="button">
// 							ALQUILAR
// 						</a>
// 					</Link>
// 					<FormSearch />
// 				</div>
// 			</div>
// 			<Image
// 				src={HeroHomeImage}
// 				layout="fill"
// 				objectFit="cover"
// 				alt="Hero Image"
// 				priority={true}
// 			/>
// 		</div>
// 	</div>
// </section>
