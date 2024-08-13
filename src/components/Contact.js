import React from "react";
import emailjs from "emailjs-com";

function Contact() {
	const handleSubmit = (e) => {
		e.preventDefault();

		emailjs
		.sendForm("service_vixwlx9", "template_ijhjtdj", e.target, "juanzdev")
		.then(
			(result) => {
			console.log(result.text);
			},
			(error) => {
			console.log(error.text);
			}
		);
	};

	return (
		<ContactWrapper id="contact">
		<ContactContent>
			<Title>Contáctame</Title>
			<ContactForm onSubmit={handleSubmit}>
			<Input type="text" name="name" placeholder="Nombre" required />
			<Input type="email" name="email" placeholder="Email" required />
			<TextArea name="message" placeholder="Mensaje" required />
			<SubmitButton type="submit">Enviar Mensaje</SubmitButton>
			</ContactForm>
		</ContactContent>
		</ContactWrapper>
	);
}

export default Contact;
