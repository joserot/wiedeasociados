import React from "react";
import Link from "next/link";

const Tasaciones = () => {
	return (
		<div className="container d-flex flex-column align-items-center  justify-content-center mt-5 ">
			<h2 className="text-center">¿Querés saber el valor de tu propiedad?</h2>
			<button
				type="button"
				style={{
					width: "80%",
					minHeight: "45px",
				}}
				className="btn btn-primary  mt-3"
			>
				<Link href="/contacto">
					<a
						style={{
							color: "inherit",
							textDecoration: "none",
						}}
					>
						{" "}
						Tasaciones / Contacto
					</a>
				</Link>
			</button>
		</div>
	);
};

export default Tasaciones;
