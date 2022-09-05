import API_INMUEBLES from "../helpers/api";

export const getInmuebles = async (query, type) => {
	const res = await fetch(API_INMUEBLES + "?per_page=20");
	let data = await res.json();

	return data.filter((inmueble) => {
		const title = inmueble.title.rendered.toLowerCase();
		const typeInmueble = inmueble.acf.type.toLowerCase();

		return (
			(!type.length && !query.length) ||
			(type.includes(inmueble.acf.type) && !query.length) ||
			(!type.length && title.includes(query)) ||
			(!type.length && typeInmueble.includes(query)) ||
			(type.includes(inmueble.acf.type) && title.includes(query)) ||
			(type.includes(inmueble.acf.type) && typeInmueble.includes(query))
		);
	});
};
