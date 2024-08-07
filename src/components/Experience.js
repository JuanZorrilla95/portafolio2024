import React from 'react';
import styled from 'styled-components';

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
    const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'PHP', 'Java', 'MySQL', 'PostgreSQL', 'Git'];

return (
    <ExperienceWrapper id="experience">
        <ExperienceContent>
        <Title>Experiencia laboral</Title>
        <Description>
        Trabajé como Full-Stack Developer en el Ministerio de Salud (Santa Fe - Argentina) en un proyecto llamado ‘Gestión de Conocimiento’ o ‘GC Salud’ de la provincia.
        </Description>
    </ExperienceContent>
    </ExperienceWrapper>
);
}

export default Experience;