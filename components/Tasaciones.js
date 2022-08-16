import React from "react";
import Link from "next/link";

const Tasaciones = () => {
	return (
		<div className="container d-flex flex-column align-items-center  justify-content-center mt-5 ">
			<h2>¿Querés saber el valor de tu propiedad?</h2>
			<button type="button" className="btn btn-primary btn-lg mt-3">
				<Link href="/contacto">
					<a
						style={{
							color: "inherit",
						}}
					>
						{" "}
						Hacé la Tasación aquí
					</a>
				</Link>
			</button>
		</div>
	);
};

export default Tasaciones;
