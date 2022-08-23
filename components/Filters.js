import React from "react";
import Cards from "./Cards";
import { useEffect, useState } from "react";
import { getInmuebles } from "../actions/getInmuebles";

const Filters = (props) => {
	const [inmuebles, setInmuebles] = useState(props.inmuebles);
	const [q, setQ] = useState("");
	const [types, setTypes] = useState([]);

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
