import React, { useContext } from "react";
import styled from "styled-components";
import { LanguageContext } from "./LanguageContext";

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
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
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
  display: flex;
  align-items: center;
  color: #333;
  margin-bottom: 0.5rem;
  user-select: none;
`;

const SkillIconLink = styled.a`
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  color: inherit;
  
  &:hover {
    opacity: 0.8;
  }
`;

const SkillIcon = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 0.5rem;
`;

const EnglishSkillItem = styled(SkillItem)`
  &:before {
    content: "▾";
    color: #007bff;
    margin-right: 0.5rem;
  }
  user-select: text;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const EnglishLink = styled.a`
  color: #007bff;
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
`;

const Skills = () => {
  const { language } = useContext(LanguageContext);

  const content = {
    es: {
      title: "Skills probadas",
      categories: {
        Frontend: "Frontend",
        Backend: "Backend",
        Herramientas: "Herramientas",
        Inglés: "Nivel de Inglés:",
      },
    },
    en: {
      title: "Proven skills",
      categories: {
        Frontend: "Frontend",
        Backend: "Backend",
        Herramientas: "Tools",
        Inglés: "My English level:",
      },
    },
  };

  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "HTML5", icon: "/html5.png", url: "https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5" },
        { name: "CSS3", icon: "/css3.png", url: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
        { name: "JavaScript", icon: "/javascript.png", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
        { name: "React", icon: "/react.png", url: "https://reactjs.org/" },
        { name: "Angular", icon: "/angular.png", url: "https://angular.io/" },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "MySQL", icon: "/mysql.png", url: "https://www.mysql.com/" },
        { name: "PHP", icon: "/php.png", url: "https://www.php.net/" },
        { name: "PostgreSQL", icon: "/postgresql.png", url: "https://www.postgresql.org/" },
        { name: "Python", icon: "/python.png", url: "https://www.python.org/" },
        { name: "Node.js", icon: "/nodejs.png", url: "https://nodejs.org/" },
        { name: "API RESTful", icon: "/api.png", url: "https://restfulapi.net/" },
        { name: "Postman", icon: "/postman.png", url: "https://www.postman.com/" },
      ],
    },
    {
      title: "Herramientas",
      skills: [
        { name: "Git", icon: "/git.png", url: "https://git-scm.com/" },
        { name: "Gitlab", icon: "/gitlab.png", url: "https://about.gitlab.com/" },
        { name: "Github", icon: "/github.png", url: "https://github.com/" },
        { name: "Laravel/Laravel Herd", icon: "/laravel.png", url: "https://laravel.com/" },
        { name: "Symfony", icon: "/symfony.png", url: "https://symfony.com/" },
		{ name: "Laragon", icon: "/laragon.png", url: "https://laragon.org/" },
        { name: "Docker", icon: "/docker.png", url: "https://www.docker.com/" },
        { name: "Apache", icon: "/apache.png", url: "https://httpd.apache.org/" },
        { name: "Redmine", icon: "/redmine.png" },
      ],
    },
    {
        title: "Inglés",
      skills: {
        es: [
          "Entre B2 y C1",
		  <>
            <EnglishLink href="https://imgur.com/5U3XP8M" target="_blank" rel="noopener noreferrer">
				Academia Global Connections (5 años)
            </EnglishLink>
          </>,
          <>
            EF SET (C1 Avanzado):
            <EnglishLink href="https://www.efset.org/cert/EUPSMW" target="_blank" rel="noopener noreferrer">
              efset.org/cert/EUPSMW
            </EnglishLink>
          </>,
        ],
        en: [
          "Between B2 and C1",
          <>
            <EnglishLink href="https://imgur.com/5U3XP8M" target="_blank" rel="noopener noreferrer">
              Global Connections Academy (5 years)
            </EnglishLink>
          </>,
          <>
            EF SET (C1 Advanced):
            <EnglishLink href="https://www.efset.org/cert/EUPSMW" target="_blank" rel="noopener noreferrer">
              efset.org/cert/EUPSMW
            </EnglishLink>
          </>,
        ],
      },
    },
  ];
  
  return (
    <SkillsWrapper id="skills">
      <SkillsContent>
        <Title>{content[language].title}</Title>
        <SkillCategories>
          {skillCategories.map((category, index) => (
            <CategoryCard key={index}>
              <CategoryTitle>
                {content[language].categories[category.title]}
              </CategoryTitle>
              <SkillList>
                {category.title === "Inglés"
                  ? category.skills[language].map((skill, skillIndex) => (
                      <EnglishSkillItem key={skillIndex}>
                        {React.isValidElement(skill) ? skill : skill}
                      </EnglishSkillItem>
                    ))
                  : category.skills.map((skill, skillIndex) => (
                      <SkillItem key={skillIndex}>
                        <SkillIconLink href={skill.url} target="_blank" rel="noopener noreferrer">
                          <SkillIcon src={skill.icon} alt={skill.name} />
                          {skill.name}
                        </SkillIconLink>
                      </SkillItem>
                    ))}
              </SkillList>
            </CategoryCard>
          ))}
        </SkillCategories>
      </SkillsContent>
    </SkillsWrapper>
  );
};

export default Skills;