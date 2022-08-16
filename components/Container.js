import Header from "./Header";
import Footer from "./Footer";
import Head from "next/head";
import WhatsAppIcon from "./WhatsAppIcon";

const Container = (props) => {
	return (
		<div>
			<Head>
				<title>Wiede y Asociados</title>
			</Head>
			<Header />
			<div className="container  mb-5">{props.children}</div>
			<Footer />
			<WhatsAppIcon />
		</div>
	);
};

export default Container;
