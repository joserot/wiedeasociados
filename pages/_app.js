import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/index.scss";

export default function MyApp({ Component, pageProps }) {
	useEffect(() => {
		import("bootstrap/js/dist/*.js");
	}, []);
	return <Component {...pageProps} />;
}
