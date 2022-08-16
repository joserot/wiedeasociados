import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/index.scss";

export default function MyApp({ Component, pageProps }) {
	useEffect(() => {
		import("../node_modules/bootstrap/dist/js/bootstrap");
	}, []);
	return <Component {...pageProps} />;
}
