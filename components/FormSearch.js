import { useState, useEffect } from "react";
import { useRouter } from "next/router";

const FormSearch = () => {
	const [operacion, setOperacion] = useState("compra");
	const router = useRouter();

	const changeOperacion = (e) => {
		setOperacion(e.target.value);
	};

	const handleForm = async (e) => {
		e.preventDefault();
		const operation = await e.target.operacion.value;
		const type = await e.target.tipo.value;

		if (operation === "compra") {
			await localStorage.setItem("type", type);
			await router.push("/inmuebles/en-venta");
		} else {
			await localStorage.setItem("type", type);
			await router.push("/inmuebles/en-alquiler");
		}
	};

	return (
		<form
			onSubmit={handleForm}
			className="row row-cols-lg-auto g-2 d-flex align-items-center justify-content-center"
			style={{
				maxWidth: "90%",
				margin: "0 auto",
			}}
		>
			<div className="col-12">
				<select
					name="operacion"
					className="form-select"
					id="inlineFormSelectPref"
					onChange={changeOperacion}
				>
					<option defaultValue value="compra">
						Compra
					</option>
					<option value="alquiler">Alquiler</option>
				</select>
			</div>
			<div className="col-12">
				{operacion === "compra" ? (
					<select name="tipo" className="form-select" id="inlineFormSelectPref">
						<option defaultValue value="Lotes">
							Lotes
						</option>
						<option value="Casas">Casas</option>
						<option value="Campos">Campos</option>
					</select>
				) : (
					<select name="tipo" className="form-select" id="inlineFormSelectPref">
						<option defaultValue value="Departamentos">
							Departamentos
						</option>
						<option value="Casas">Casas</option>
						<option value="Comercios">Locales Comerciales</option>
					</select>
				)}
			</div>
			<div className="col-12">
				<button type="submit" className="btn btn-primary">
					Buscar
				</button>
			</div>
		</form>
	);
};

export default FormSearch;
