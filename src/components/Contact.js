import styled from "styled-components";
import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";

emailjs.init(process.env.REACT_APP_EMAILJS_PUBLIC_KEY);

const ContactWrapper = styled.section`
	background-color: #ffffff;
	padding: 4rem 2rem;
`;

const ContactContent = styled.div`
	max-width: 600px;
	margin: 0 auto;
	text-align: center;
`;

const Title = styled.h2`
	color: #333;
	font-size: 2.5rem;
	margin-bottom: 2rem;
`;

const ContactForm = styled.form`
	display: flex;
	flex-direction: column;
	gap: 1rem;
`;

const Input = styled.input`
	padding: 0.8rem;
	border: 1px solid #ddd;
	border-radius: 4px;
	font-size: 1rem;
`;

const TextArea = styled.textarea`
	padding: 0.8rem;
	border: 1px solid #ddd;
	border-radius: 4px;
	font-size: 1rem;
	resize: vertical;
	min-height: 150px;
`;


const SubmitButton = styled.button`
	background-color: ${props => props.disabled ? '#4CAF50' : '#007bff'};
	color: white;
	border: none;
	padding: 0.8rem 1.5rem;
	font-size: 1rem;
	border-radius: 4px;
	cursor: ${props => props.disabled ? 'default' : 'pointer'};
	transition: background-color 0.3s ease;
	&:hover {
		background-color: ${props => props.disabled ? '#4CAF50' : '#0056b3'};
	}
`;
function Contact() {
	const form = useRef();
	const [isSubmitted, setIsSubmitted] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();
		setIsSubmitted(true); 

		emailjs.sendForm(
		process.env.REACT_APP_EMAILJS_SERVICE_ID,
		process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
		form.current,
		process.env.REACT_APP_EMAILJS_PUBLIC_KEY
		).then((result) => {
		console.log('Email enviado exitosamente:', result.text);
		
		}, (error) => {
		console.error('Error al enviar el email:', error.text);
		setIsSubmitted(false); 
		});
	};

	return (
		<ContactWrapper id="contact">
		<ContactContent>
			<Title>Contáctame</Title>
			<ContactForm ref={form} onSubmit={handleSubmit}>
			<Input type="text" name="name" placeholder="Nombre" required disabled={isSubmitted} />
			<Input type="email" name="email" placeholder="Email" required disabled={isSubmitted} />
			<TextArea name="message" placeholder="Mensaje" required disabled={isSubmitted} />
			<SubmitButton type="submit" disabled={isSubmitted}>
				{isSubmitted ? '✓ Mensaje Enviado' : 'Enviar Mensaje'}
			</SubmitButton>
			</ContactForm>
		</ContactContent>
		</ContactWrapper>
	);
}

export default Contact;