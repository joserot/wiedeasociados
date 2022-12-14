import "../styles/index.scss";
import { useEffect } from "react";
import { useRouter } from "next/router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

function MyApp({ Component, pageProps }) {
	const router = useRouter();
	useEffect(() => {
		typeof document !== undefined
			? require("bootstrap/dist/js/bootstrap")
			: null;
	}, [router]);

	useEffect(() => {
		const handleStart = (url) => {
			console.log(`Cargando: ${url}`);
			NProgress.start();
		};

		const handleStop = () => {
			NProgress.done();
		};

		router.events.on("routeChangeStart", handleStart);
		router.events.on("routeChangeComplete", handleStop);
		router.events.on("routeChangeError", handleStop);

		return () => {
			router.events.off("routeChangeStart", handleStart);
			router.events.off("routeChangeComplete", handleStop);
			router.events.off("routeChangeError", handleStop);
		};
	}, [router]);

	return <Component {...pageProps} />;
}

export default MyApp;
