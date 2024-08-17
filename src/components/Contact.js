import styled from "styled-components";
import React, { useRef, useState, useContext } from "react";
import emailjs from "emailjs-com";
import { LanguageContext } from './LanguageContext';

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
	const { language } = useContext(LanguageContext);
	const form = useRef();
	const [isSubmitted, setIsSubmitted] = useState(false);

	const content = {
	es: {
		title: "Contáctame",
		name: "Nombre",
		email: "Email",
		message: "Mensaje",
		send: "Enviar Mensaje",
		sent: "✓ Mensaje Enviado"
	},
	en: {
		title: "Contact Me",
		name: "Name",
		email: "Email",
		message: "Message",
		send: "Send Message",
		sent: "✓ Message Sent"
	}
	};

	const handleSubmit = (e) => {
	e.preventDefault();
	setIsSubmitted(true);

	emailjs.sendForm(
		process.env.REACT_APP_EMAILJS_SERVICE_ID,
		process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
		form.current,
		process.env.REACT_APP_EMAILJS_PUBLIC_KEY
	).then((result) => {
		console.log('Email sent successfully:', result.text);
	}, (error) => {
		console.error('Error sending email:', error.text);
		setIsSubmitted(false);
		});
	};

	return (
	<ContactWrapper id="contact">
	<ContactContent>
		<Title>{content[language].title}</Title>
		<ContactForm ref={form} onSubmit={handleSubmit}>
		<Input type="text" name="name" placeholder={content[language].name} required disabled={isSubmitted} />
		<Input type="email" name="email" placeholder={content[language].email} required disabled={isSubmitted} />
		<TextArea name="message" placeholder={content[language].message} required disabled={isSubmitted} />
		<SubmitButton type="submit" disabled={isSubmitted}>
			{isSubmitted ? content[language].sent : content[language].send}
		</SubmitButton>
		</ContactForm>
	</ContactContent>
	</ContactWrapper>
	);
}

export default Contact;