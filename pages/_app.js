import { useEffect } from "react";
//import "bootstrap/dist/css/bootstrap.css";
import "../styles/index.scss";

export default function MyApp({ Component, pageProps }) {
	useEffect(() => {
		import("bootstrap/js/dist/button");
		import("bootstrap/js/dist/carousel");
		import("bootstrap/js/dist/dropdown");
	}, []);
	return <Component {...pageProps} />;
}
