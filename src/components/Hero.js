import React, { useContext } from 'react';
import styled from 'styled-components';
import { LanguageContext } from './LanguageContext';

const HeroWrapper = styled.section`
	background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
	color: white;
	padding: 6rem 2rem;
	text-align: center;
`;

const Title = styled.h1`
	font-size: 3rem;
	margin-bottom: 1rem;
`;

const Subtitle = styled.p`
	font-size: 1.2rem;
	max-width: 600px;
	margin: 0 auto 2rem;
`;

const CTAButton = styled.a`
	background-color: #ffd700;
	color: #333;
	padding: 0.8rem 1.5rem;
	border-radius: 30px;
	text-decoration: none;
	font-weight: bold;
	transition: all 0.3s ease;

	&:hover {
		background-color: #ffec8b;
		transform: translateY(-3px);
		box-shadow: 0 4px 8px rgba(0,0,0,0.2);
	}
`;

function Hero() {
	const { language } = useContext(LanguageContext);

	const content = {
	es: {
		title: "Bienvenidos a mi portafolio",
		subtitle: "Soy un desarrollador Full-Stack apasionado por crear experiencias web atractivas y eficientes.",
		cta: "Ver mis proyectos"
	},
	en: {
		title: "Welcome to my portfolio",
		subtitle: "I'm a Full-Stack developer passionate about creating attractive and efficient web experiences for the users.",
		cta: "View my projects"
	}
	};

	return (
	<HeroWrapper>
		<Title>{content[language].title}</Title>
		<Subtitle>{content[language].subtitle}</Subtitle>
		<CTAButton href="#projects">{content[language].cta}</CTAButton>
	</HeroWrapper>
	);
}

export default Hero;
