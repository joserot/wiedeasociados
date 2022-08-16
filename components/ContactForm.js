import React from "react";

const ContactForm = () => {
	return (
		<div>
			<h3>Dejanos tus consultas</h3>
			<form>
				<div className="form-outline mb-4">
					<input type="text" placeholder="Nombre" className="form-control" />
				</div>
				<div className="form-outline mb-4">
					<input type="email" placeholder="Email" className="form-control" />
				</div>
				<div className="form-outline mb-4">
					<textarea
						className="form-control"
						rows={4}
						defaultValue={""}
						placeholder="Mensaje"
					/>
				</div>
				<button type="submit" className="btn btn-primary btn-block mb-4">
					Enviar
				</button>
			</form>
		</div>
	);
};
export default ContactForm;
