import { useEffect } from "react";
//import "bootstrap/dist/css/bootstrap.css";
import "../styles/index.scss";

export default function MyApp({ Component, pageProps }) {
	useEffect(() => {
		typeof document !== undefined
			? import("bootstrap/dist/js/bootstrap")
			: null;
	}, []);
	return <Component {...pageProps} />;
}
