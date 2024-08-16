import React, { useContext } from 'react';
import styled from 'styled-components';
import { LanguageContext } from './LanguageContext';

const ProjectsWrapper = styled.section`
  background-color: #ffffff;
  padding: 4rem 2rem;
`;

const ProjectsContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h2`
  color: #333;
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 3rem;
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const ProjectCard = styled.div`
  background-color: #f8f9fa;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const ProjectInfo = styled.div`
  padding: 1.5rem;
`;

const ProjectTitle = styled.h3`
  color: #333;
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
`;

const ProjectDescription = styled.p`
  color: #666;
  font-size: 0.9rem;
  margin-bottom: 1rem;
`;

const ProjectLink = styled.a`
  color: #007bff;
  text-decoration: none;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }
`;

function Projects() {
  const { language } = useContext(LanguageContext);

  const content = {
    es: {
      title: "Mis Proyectos",
      viewMore: "Ver más"
    },
    en: {
      title: "Projects",
      viewMore: "View more"
    }
  };

  const projects = [
    {
      title: "ChocolateShop",
      description: "E-commerce de tienda de Chocolates con Laravel 11",
      image:
        "https://github.com/JuanZorrilla95/ChocolateShop/blob/ChocolateShopMain/public/chocolate.png?raw=true",
      link: "https://github.com/JuanZorrilla95/chocolateshop",
    },
    {
      title: "EspacioM",
      description:
        "Espacio de Yoga que incluye pasarela de pago de abono de clases mensuales",
      image:
        "https://raw.githubusercontent.com/JuanZorrilla95/espacioM/main/images/yoga.ico",
      link: "https://juanzorrilla95.github.io/espacioM/",
    },
    {
      title: "GYM Kumbia-PHP",
      description:
        "Proyecto de un Gimnasio con alta de clases, profesores, horarios hecho con KumbiaPHP y el patrón MVC",
      image: "./logogym.png",
      alt: "Logo Gym",
      link: "https://github.com/JuanZorrilla95/GYM-KumbiaPHP",
    },
  ];

  return (
    <ProjectsWrapper id="projects">
      <ProjectsContent>
        <Title>{content[language].title}</Title>
        <ProjectGrid>
          {projects.map((project, index) => (
            <ProjectCard key={index}>
              <ProjectImage src={project.image} alt={project.title[language]} />
              <ProjectInfo>
                <ProjectTitle>{project.title[language]}</ProjectTitle>
                <ProjectDescription>{project.description[language]}</ProjectDescription>
                <ProjectLink href={project.link} target="_blank">{content[language].viewMore}</ProjectLink>
              </ProjectInfo>
            </ProjectCard>
          ))}
        </ProjectGrid>
      </ProjectsContent>
    </ProjectsWrapper>
  );
}

export default Projects;
  


