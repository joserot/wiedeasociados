import React from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
	const sendForm = (e) => {
		e.preventDefault();

		e.target.btn.value = "Enviando...";

		emailjs.init("dZKailm7QnsC8RZiJ");
		emailjs.sendForm("default_service", "template_07wbjkl", e.target).then(
			() => {
				alert("Enviado!");
				e.target.btn.value = "Enviar";
			},
			(err) => {
				alert("Ocurrió un error");
			},
		);
	};
	return (
		<div>
			<h3>Tasá con Wiede y Asociados</h3>
			<form id="contact-form" onSubmit={sendForm}>
				<div className="form-outline mb-4">
					<input
						type="text"
						placeholder="Nombre"
						className="form-control"
						name="nombre"
						required
					/>
				</div>
				<div className="form-outline mb-4">
					<input
						type="email"
						placeholder="Email"
						className="form-control"
						name="email"
						required
					/>
				</div>
				<div className="form-outline mb-4">
					<textarea
						className="form-control"
						rows={4}
						defaultValue={""}
						placeholder="Dejanos tu consulta "
						name="mensaje"
						required
					/>
				</div>
				<input
					type="submit"
					className="btn btn-primary btn-block mb-4"
					name="btn"
					value="Enviar"
				></input>
			</form>
		</div>
	);
};
export default ContactForm;
