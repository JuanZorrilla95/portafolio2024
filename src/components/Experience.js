import React, { useContext } from 'react';
import styled from 'styled-components';
import { LanguageContext } from './LanguageContext';

const ExperienceWrapper = styled.section`
    background-color: #f8f9fa;
    padding: 4rem 2rem;
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

function Experience() {
    const { language } = useContext(LanguageContext);

    const content = {
    es: {
        title: "Experiencia laboral",
        description: "Trabajé como Full-Stack Developer en el Ministerio de Salud (Santa Fe - Argentina) en un proyecto llamado 'Gestión de Conocimiento' o 'GC Salud' de la provincia."
    },
    en: {
        title: "Work Experience",
        description: "I worked as a Full-Stack Developer at the Ministry of Health (Santa Fe - Argentina) on a legacy project called 'Knowledge Management' or 'GC Salud'."
    }
    };

    return (
    <ExperienceWrapper id="experience">
        <ExperienceContent>
        <Title>{content[language].title}</Title>
        <Description>{content[language].description}</Description>
        </ExperienceContent>
    </ExperienceWrapper>
    );
}

export default Experience;