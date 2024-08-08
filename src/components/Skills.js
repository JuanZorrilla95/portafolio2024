import React from 'react';
import styled from 'styled-components';

const SkillsWrapper = styled.section`
	background-color: #f0f4f8;
	padding: 4rem 2rem;
`;

const SkillsContent = styled.div`
	max-width: 800px;
	margin: 0 auto;
`;

const Title = styled.h2`
	color: #333;
	font-size: 2.5rem;
	text-align: center;
	margin-bottom: 3rem;
`;

const SkillCategories = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
	gap: 2rem;
`;

const CategoryCard = styled.div`
	background-color: white;
	border-radius: 8px;
	padding: 1.5rem;
	box-shadow: 0 4px 6px rgba(0,0,0,0.1);
`;

const CategoryTitle = styled.h3`
	color: #007bff;
	font-size: 1.2rem;
	margin-bottom: 1rem;
	text-align: center; 
`;

const SkillList = styled.ul`
	list-style-type: none;
	padding: 0;
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
	gap: 1rem;
`;

const SkillItem = styled.li`
	&:before {
		content: '▹';
		color: #007bff;
		margin-right: 0.5rem;
	}  
	color: #333;
	margin-bottom: 0.5rem;
	display: grid;
	align-items: center;
	grid-template-columns: min-content 1fr;
	gap: 0.5rem;
`;

function Skills() {
	const skillCategories = [
		{
		title: 'Frontend',
		skills: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Angular']
		},
		{
		title: 'Backend',
		skills: ['MySQL', 'PHP', 'PostgreSQL', , 'Python', 'Node.js', 'API RESTful', 'Postman']
		},
		{
		title: 'Herramientas',
		skills: ['Git', 'Gitlab', 'Github', 'Laravel/Laravel Herd', 'Symfony', 'Webpack', 'Docker', 'Apache', 'Laragon']
		},
		{
		title: 'Inglés',
		skills: ['Entre B2 y C1', 'Academia Global Connections (5 años)', 'EF SET (C1 Avanzado): efset.org/cert/EUPSMW '],
		}
	];

return (
    <SkillsWrapper id='skills'>
    <SkillsContent>
        <Title>Skills probadas</Title>
        <SkillCategories>
		{skillCategories.map((category, index) => (
		<CategoryCard key={index}>
			<CategoryTitle>{category.title}</CategoryTitle>
			<SkillList>
			{category.skills.map((skill, skillIndex) => (
				<SkillItem key={skillIndex}>{skill}</SkillItem>
			))}
			</SkillList>
		</CategoryCard>
		))}
	</SkillCategories>
	</SkillsContent>
    </SkillsWrapper>
	);
}

export default Skills;