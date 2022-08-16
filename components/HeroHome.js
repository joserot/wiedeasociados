import React from "react";
import Link from "next/link";
import Image from "next/image";
import HeroHomeImage from "../public/hero-image-home.webp";

const HeroHome = () => {
	return (
		<header
			className="text-center"
			style={{
				width: "100%",
				height: "50vh",
				zIndex: "-2",
			}}
		>
			<div
				className="mask z-index-2"
				style={{
					width: "100%",
					height: "100%",
					zIndex: "-10",
				}}
			>
				<div
					style={{
						width: "100%",
						height: "100%",
						position: "relative",
						zIndex: "10",
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
						className="d-flex justify-content-center align-items-center h-100 "
					>
						<div className="text-white">
							<h1 className="mb-3">Wiede &amp; Asociados</h1>
							<h5 className="mb-4">
								Servicios Inmobiliarios - Gdor. Virasoro y alrededores
							</h5>
							<Link href="/inmuebles/en-venta">
								<a
									className="btn btn-outline-light btn-lg m-2"
									role="button"
									rel="nofollow"
								>
									Inmuebles en venta
								</a>
							</Link>
							<Link href="/contacto">
								<a className="btn btn-outline-light btn-lg m-2" role="button">
									Contacto
								</a>
							</Link>
						</div>
					</div>
					<Image
						src={HeroHomeImage}
						layout="fill"
						objectFit="cover"
						alt="Hero Image"
						priority={true}
					/>
				</div>
			</div>
		</header>
	);
};

export default HeroHome;
