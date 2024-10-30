import React, { useContext } from 'react';
import styled from 'styled-components';
import { LanguageContext } from './LanguageContext';
import ScrollToTopButton from './ScrollToTopButton';
const ExperienceWrapper = styled.section`
    position: relative;
    background-color: #f8f9fa;
    padding: 4rem 2rem;

    @media (max-width: 768px) {
        padding: 3rem 1.5rem;
    }

    @media (max-width: 480px) {
        padding: 2rem 1rem;
    }
`;

const ExperienceContent = styled.div`
    max-width: 800px;
    margin: 0 auto;
    text-align: center;
`;

const Title = styled.h2`
    color: #333;
    font-size: 2.5rem;
    margin-bottom: 2rem;

    @media (max-width: 768px) {
        font-size: 2rem;
    }

    @media (max-width: 480px) {
        font-size: 1.8rem;
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

    @media (max-width: 480px) {
        font-size: 0.9rem;
    }
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
    font-size: 0.9rem;

    @media (max-width: 480px) {
        font-size: 0.8rem;
        padding: 0.4rem 0.8rem;
    }
        
`;

const StyledLink = styled.a`
    color: #007bff;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    transition: color 0.3s ease;

    &:hover {
        color: #0056b3;
    }

    img {
        margin-left: 5px;
        transition: transform 0.3s ease;
    }

    &:hover img {
        transform: translateX(3px);
    }
`;

const ExperienceItem = styled.div`
    margin-bottom: 3rem;
`;

function Experience() {
    const { language } = useContext(LanguageContext);

    const content = {
        es: {
            title: "Experiencia laboral",
            experiences: [
                {
                    description: (
                        <>
                            Trabajé como Full-Stack Developer en el Ministerio de Salud (Santa Fe - Argentina) en un proyecto llamado {" "}
                            <StyledLink href="https://www.santafe.gob.ar/ms/gcsalud/" target="_blank" rel="noopener noreferrer">
                                GC Salud
                                <img src="flechas-izquierda.png" alt="GC Salud" width="16" height="16" />
                            </StyledLink>
                        </>
                    ),
                    skills: ["PHP", "Javascript", "Symfony", "MySQL", "HTML", "CSS"]
                },
                {
                    description: "Actualmente estoy trabajando como desarrollador Full-Stack Laravel en una aplicación de préstamos financieros llamada Koinsya y adminKoinsya, implementando APIs de bancos, nuevas funcionalidades y migrando la base de datos de MySQL a AWS Cloud.",
                    skills: ["Laravel 11", "PHP", "TailwindCSS", "MySQL", "AWS"]
                }
            ]
        },
        en: {
            title: "Work experience",
            experiences: [
                {
                    description: (
                        <>
                            I worked as a Full-Stack Developer at the Ministry of Health (Santa Fe - Argentina) on a project called {" "}
                            <StyledLink href="https://www.santafe.gob.ar/ms/gcsalud/" target="_blank" rel="noopener noreferrer">
                                GC Salud
                                <img src="flechas-izquierda.png" alt="GC Salud" width="16" height="16" />
                            </StyledLink>
                        </>
                    ),
                    skills: ["PHP", "Javascript", "Symfony", "MySQL", "HTML", "CSS"]
                },
                {
                    description: "Currently working as a Full-Stack Laravel developer  at a financial loan app called Koinsya & adminKoinsya, implementing bank apis, new funcionalities and migrating DB from mysql to AWS Cloud.",
                    skills: ["Laravel 11", "PHP", "TailwindCSS", "MySQL", "AWS"]
                }
            ]
        }
    };

    return (
        <ExperienceWrapper id="experience">
            <ExperienceContent>
                <Title>{content[language].title}</Title>
                {content[language].experiences.map((experience, index) => (
                    <ExperienceItem key={index}>
                        <Description>{experience.description}</Description>
                        <SkillsList>
                            {experience.skills.map((skill, skillIndex) => (
                                <SkillItem key={skillIndex}>{skill}</SkillItem>
                            ))}
                        </SkillsList>
                    </ExperienceItem>
                ))}
            </ExperienceContent>
            <ScrollToTopButton />
        </ExperienceWrapper>
    );
}

export default Experience;