import { useEffect } from "react";
//import "bootstrap/dist/css/bootstrap.css";
import "../styles/index.scss";

export default function MyApp({ Component, pageProps }) {
	useEffect(() => {
		typeof document !== undefined
			? require("bootstrap/dist/js/bootstrap.bundle.min.js")
			: null;
	}, []);
	return <Component {...pageProps} />;
}
