import React from 'react';
import styled from 'styled-components';

const AboutWrapper = styled.section`
  background-color: #f8f9fa;
  padding: 4rem 2rem;
`;

const AboutContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
`;

const Title = styled.h2`
  color: #333;
  font-size: 2.5rem;
  margin-bottom: 2rem;
`;

const Description = styled.p`
  color: #666;
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 2rem;
`;

const SkillsList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
`;

const SkillItem = styled.li`
  background-color: #e9ecef;
  color: #495057;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-weight: 500;
`;

function About() {
  const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'PHP', 'Java 8 & 17', 'MySQL', 'PostgreSQL', 'Git'];

  return (
    <AboutWrapper id="about">
      <AboutContent>
        <Title>Sobre Mí</Title>
        <Description>
          Soy un desarrollador web full-stack 2 años de experiencia en el mercado y un apasionado por crear aplicaciones web 
          innovadoras y eficientes. Me encanta aprender nuevas tecnologías y resolver problemas. Cuando no estoy codeando, disfruto de actividad física como basquet y calistenia.
        </Description>
        <SkillsList>
          {skills.map((skill, index) => (
            <SkillItem key={index}>{skill}</SkillItem>
          ))}
        </SkillsList>
      </AboutContent>
    </AboutWrapper>
  );
}

export default About;