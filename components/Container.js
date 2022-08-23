import Header from "./Header";
import Footer from "./Footer";
import Head from "next/head";
import WhatsAppIcon from "./WhatsAppIcon";

const Container = (props) => {
	return (
		<div>
			<Head>
				<title>Wiede y Asociados</title>
				<link rel="shortcut icon" href="/logo.png" />
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
				<link
					href="https://fonts.googleapis.com/css2?family=Jaldi&display=swap"
					rel="stylesheet"
				/>
			</Head>
			<Header />
			<div className="container  mb-5 ">{props.children}</div>
			<Footer />
			<WhatsAppIcon />
		</div>
	);
};

export default Container;
