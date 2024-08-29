import React, { useContext, useState } from "react";
import styled from "styled-components";
import { LanguageContext } from "./LanguageContext";

const AboutWrapper = styled.section`
  background-color: #f8f9fa;
  padding: 4rem 2rem;

  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

const AboutContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const Title = styled.h2`
  color: #333;
  font-size: 2.5rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Description = styled.p`
  color: #666;
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const SkillsList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;

  @media (max-width: 768px) {
    gap: 0.5rem;
  }
`;

const SkillItem = styled.li`
  background-color: #e9ecef;
  color: #495057;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-weight: 500;
  position: relative;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 768px) {
    padding: 0.3rem 0.8rem;
  }
`;

const SkillIcon = styled.img`
  position: absolute;
  top: -30px;
  left: 50%;
  transform: translateX(-50%) scale(0);
  width: 24px;
  height: 24px;
  transition: all 0.3s ease;

  ${SkillItem}:hover & {
    transform: translateX(-50%) scale(1);
  }
`;

function About() {
  const { language } = useContext(LanguageContext);
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const content = {
    es: {
      title: "Sobre mí",
      description:
        "Soy un desarrollador web full-stack y un apasionado por crear aplicaciones web innovadoras y eficientes. Me encanta aprender nuevas tecnologías y resolver problemas. Cuando no estoy codeando, disfruto de actividad física como basquet y calistenia.",
      skills: ["React", "Node.js", "JavaScript", "PHP", "MySQL", "HTML5", "CSS3"],
    },
    en: {
      title: "About me",
      description:
        "I'm a full-stack developer with 2 YOE and passionate for creating innovative and efficient web apps. I love learning new technologies and solving problems. When I'm not looking at pixels, I enjoy physical activities like basketball and calisthenics.",
      skills: ["React", "Node.js", "JavaScript", "PHP", "MySQL", "HTML5", "CSS3"],
    },
  };

  return (
    <AboutWrapper id="about">
      <AboutContent>
        <Title>{content[language].title}</Title>
        <Description>{content[language].description}</Description>
        <SkillsList>
          {content[language].skills.map((skill, index) => (
            <SkillItem 
              key={index}
              onMouseEnter={() => setHoveredSkill(skill)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              {skill}
              <SkillIcon 
                src={`/${skill.toLowerCase().replace('.', '')}.png`} 
                alt={`${skill} icon`}
                style={{ opacity: hoveredSkill === skill ? 1 : 0 }}
              />
            </SkillItem>
          ))}
        </SkillsList>
      </AboutContent>
    </AboutWrapper>
  );
}

export default About;
