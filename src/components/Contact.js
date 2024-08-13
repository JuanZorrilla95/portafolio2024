import React from "react";
import styled from "styled-components";
//import nodemailer from "nodemailer";

import emailjs from 'emailjs-com';
emailjs.init('process.env.REACT_APP_EMAILJS_USER_ID');

const SERVICE_ID = "service_vixwlx9";
const TEMPLATE_ID = "template_ijhjtdj";
const PUBLIC_KEY = "eIOCpNB_SrOYTsHUd";

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
    background-color: #007bff;
    color: white;
    border: none;
    padding: 0.8rem 1.5rem;
    font-size: 1rem;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #0056b3;
    }
  `;


function Contact() {
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulario enviado");

    
      emailjs.sendForm((SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
    ).then((result) => {
        console.log('Email enviado exitosamente:', result.text);
        // Aquí podrías mostrar un mensaje de éxito al usuario
    }, (error) => {
        console.error('Error al enviar el email:', error.text);
        // Aquí podrías mostrar un mensaje de error al usuario
    });
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