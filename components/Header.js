import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../public/wiedeyasociados-logo.webp";

const Header = () => {
	return (
		<header className="bg-light">
			<nav className="container  navbar navbar-expand-lg ">
				<div className="container-fluid">
					<Link href="/">
						<a className="navbar-brand ">
							<Image
								src={logo}
								alt="wiede y asociados logo"
								width={80}
								height={80}
							/>
						</a>
					</Link>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarNavDropdown"
						aria-controls="navbarNavDropdown"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon" />
					</button>
					<div className="collapse navbar-collapse" id="navbarNavDropdown">
						<ul className="navbar-nav">
							<li className="nav-item">
								<Link href="/">
									<a className="nav-link" aria-current="page">
										Inicio
									</a>
								</Link>
							</li>

							<li className="nav-item">
								<Link href="/inmuebles/en-venta">
									<a className="nav-link" aria-current="page">
										En venta
									</a>
								</Link>
							</li>
							<li className="nav-item">
								<Link href="/inmuebles/en-alquiler">
									<a className="nav-link" aria-current="page">
										En alquiler
									</a>
								</Link>
							</li>
							<li className="nav-item">
								<Link href="/contacto">
									<a className="nav-link" aria-current="page">
										Contacto
									</a>
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</header>
	);
};

export default Header;
