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
        description: (
            <span>
                Trabajé como Full-Stack Developer en el Ministerio de Salud (Santa Fe - Argentina) en un proyecto llamado 
                <a href="https://www.santafe.gob.ar/gcsalud/" rel="noreferrer" target="_blank"> GC Salud
                <img src="flechas-izquierda.png" alt="GC Salud" style={{ width: 18, height: 18 }}/></a>
            </span>
        )},
        en: {
        title: "Work experience",
        description: (
            <span>
                I worked as a Full-Stack Developer at the Ministry of Health (Santa Fe - Argentina) on a legacy project called 
                GC Salud <a href="https://www.santafe.gob.ar/gcsalud/" rel="noreferrer" target="_blank">    
                <img src="flechas-izquierda.png" alt="GC Salud" style={{ width: 18, height: 18 }}/></a>  
            </span>
        )}
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