import React from 'react';
import styled from 'styled-components';

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
  return (
    <HeroWrapper>
      <Title>Bienvenidos a mi portafolio</Title>
      <Subtitle>Soy un desarrollador Full-Stack apasionado por crear experiencias web atractivas y eficientes.</Subtitle>
      <CTAButton href="#projects">Ver mis Proyectos</CTAButton>
    </HeroWrapper>
  );
}

export default Hero;