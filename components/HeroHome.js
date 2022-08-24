import React from "react";
import Link from "next/link";
import Image from "next/image";
import FormSearch from "./FormSearch";
import HeroPagesImage from "../public/virasoro.webp";
import hero1 from "../public/hero1.webp";
import hero2 from "../public/hero2.webp";
import hero3 from "../public/hero3.webp";
import hero4 from "../public/hero4.webp";

const HeroHome = () => {
	return (
		<section
			style={{
				height: "65vh",
				width: "100%",
			}}
		>
			<div
				style={{
					width: "100%",
					height: "100%",
				}}
				className="d-flex flex-column  justify-content-center align-items-center h-100 "
			>
				<div
					style={{
						width: "100%",
						height: "65vh",
					}}
					id="carouselExampleControls"
					className="carousel slide"
					data-bs-ride="carousel"
				>
					<div
						className="carousel-inner"
						style={{
							width: "100%",
							height: "65vh",
						}}
					>
						<div
							className="carousel-item active"
							style={{
								width: "100%",
								height: "65vh",
							}}
							data-bs-interval="3000"
						>
							<Image src={HeroPagesImage} layout="fill" objectFit="cover" />
						</div>
						<div
							className="carousel-item"
							style={{
								width: "100%",
								height: "65vh",
							}}
							data-bs-interval="3000"
						>
							<Image src={hero1} layout="fill" objectFit="cover" />
						</div>
						<div
							className="carousel-item"
							style={{
								width: "100%",
								height: "65vh",
							}}
							data-bs-interval="3000"
						>
							<Image src={hero2} layout="fill" objectFit="cover" />
						</div>
						<div
							className="carousel-item"
							style={{
								width: "100%",
								height: "65vh",
							}}
							data-bs-interval="3000"
						>
							<Image src={hero3} layout="fill" objectFit="cover" />
						</div>
						<div
							className="carousel-item"
							style={{
								width: "100%",
								height: "65vh",
							}}
							data-bs-interval="3000"
						>
							<Image src={hero4} layout="fill" objectFit="cover" />
						</div>
					</div>
				</div>
				<div
					style={{
						position: "absolute",
						textShadow: "2px 2px 5px  #000",
					}}
				>
					<h2 className="text-center text-white display-3">
						Encontremos tu lugar ideal
					</h2>
					<h5 className="text-center text-white mx-2">
						Servicios Inmobiliarios - Gobernador Virasoro Ctes. y alrededores
					</h5>
					<FormSearch />
				</div>
			</div>
		</section>
	);
};

export default HeroHome;
