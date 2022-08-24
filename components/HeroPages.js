import React from "react";
import Image from "next/image";
import HeroPagesImage from "../public/virasoro.webp";

const HeroPages = (props) => {
	const title = props.title;
	return (
		<header
			className="text-center"
			style={{
				width: "100%",
				height: "30vh",
				zIndex: "-2",
				marginBottom: "5rem",
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
							<h1 className="mb-3 display-5">{title}</h1>
						</div>
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
		</header>
	);
};

export default HeroPages;
