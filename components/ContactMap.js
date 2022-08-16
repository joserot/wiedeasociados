import React from "react";

const ContactMap = () => {
	return (
		<div style={{ width: "100%", height: "100%" }}>
			<h3>AquÍ nos podés encontrar</h3>
			<iframe
				style={{ width: "100%", height: "80%" }}
				src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3521.104333461418!2d-56.02422108493039!3d-28.051838782650435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x945668072c72634f%3A0xfef330c4f645f9aa!2sGdor.%20Ferr%C3%A9%202431%2C%20Gdor.%20Virasoro%2C%20Corrientes!5e0!3m2!1sen!2sar!4v1654266704261!5m2!1sen!2sar"
				allowFullScreen=""
				loading="lazy"
				referrerPolicy="no-referrer-when-downgrade"
			></iframe>
		</div>
	);
};

export default ContactMap;
