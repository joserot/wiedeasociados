import React from "react";
import Cards from "./Cards";
import { useEffect, useState, useRef } from "react";
import { getInmuebles } from "../actions/getInmuebles";

const Filters = (props) => {
	const typeSaved =
		localStorage.getItem("type") !== null ? [localStorage.getItem("type")] : [];
	const [inmuebles, setInmuebles] = useState(props.inmuebles);
	const [q, setQ] = useState("");
	const [types, setTypes] = useState(typeSaved);
	const lotes = useRef(null);
	const casas = useRef(null);
	const campos = useRef(null);

	const search = (e) => {
		let query = e.target.value.toLowerCase();
		setQ(query);
	};

	const filterType = (e) => {
		let type = e.target.name;

		if (types.includes(type)) {
			let newTypes = types.filter((t) => {
				return t !== type;
			});
			setTypes((current) => [...newTypes]);
		} else {
			setTypes((current) => [...current, type]);
		}
	};

	useEffect(() => {
		if (typeSaved.length > 0) {
			if (typeSaved.includes("Lotes")) {
				lotes.current.checked = true;
				localStorage.removeItem("type");
			}

			if (typeSaved.includes("Casas")) {
				casas.current.checked = true;
				localStorage.removeItem("type");
			}

			if (typeSaved.includes("Campos")) {
				campos.current.checked = true;
				localStorage.removeItem("type");
			}
		}
		getInmuebles(q.toLowerCase(), types).then((res) => {
			setInmuebles(res);
		});
	}, [q, types]);

	return (
		<div>
			<div className="container w-75 mb-5 p-lg-3" id="filters">
				<div className="input-group">
					<input
						type="search"
						className="form-control rounded"
						placeholder="Buscar Inmuebles por título o tipo"
						name="search"
						onKeyDown={search}
						onChange={search}
					/>
				</div>
				<div className="form-check form-switch mt-3">
					<input
						className="form-check-input"
						type="checkbox"
						role="switch"
						name="Lotes"
						ref={lotes}
						onChange={filterType}
					/>
					<label className="form-check-label" htmlFor="flexSwitchCheckDefault">
						Lotes
					</label>
				</div>
				<div className="form-check form-switch">
					<input
						className="form-check-input"
						type="checkbox"
						role="switch"
						name="Casas"
						ref={casas}
						onChange={filterType}
					/>
					<label className="form-check-label" htmlFor="flexSwitchCheckChecked">
						Casas
					</label>
				</div>

				<div className="form-check form-switch">
					<input
						className="form-check-input"
						type="checkbox"
						role="switch"
						name="Campos"
						ref={campos}
						onChange={filterType}
					/>
					<label
						className="form-check-label"
						htmlFor="flexSwitchCheckCheckedDisabled"
					>
						Campos
					</label>
				</div>
			</div>

			<Cards inmuebles={inmuebles} />
		</div>
	);
};

export default Filters;
