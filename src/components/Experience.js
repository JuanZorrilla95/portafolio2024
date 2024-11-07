import React, { useContext, useState } from "react";
import styled from "styled-components";
import { LanguageContext } from "./LanguageContext";
import ScrollToTopButton from "./ScrollToTopButton";

const Separator = styled.div`
  width: 100%;
  height: 2px;
  background: linear-gradient(to right, transparent, #007bff, transparent);
  margin: 2rem 0;
  opacity: 0.5;
`;
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
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const content = {
    es: {
      title: "Experiencia laboral",
      experiences: [
        {
          description: (
            <>
              Trabajé como Full-Stack Developer en el <b>Ministerio de Salud</b>{" "}
              (Santa Fe - Argentina) en un proyecto llamado{" "}
              <StyledLink
                href="https://www.santafe.gob.ar/ms/gcsalud/"
                target="_blank"
                rel="noopener noreferrer"
              >
                GC Salud
                <img
                  src="flechas-izquierda.png"
                  alt="GC Salud"
                  width="16"
                  height="16"
                />
              </StyledLink>
            </>
          ),
          skills: ["PHP", "Javascript", "Symfony", "MySQL", "HTML", "CSS"],
        },
        {
          description: (
            <>
              Actualmente trabajando como desarrollador Full-Stack Laravel en
              una aplicación de préstamos financieros llamada <b>Koinsya</b> y{" "}
              <b>adminKoinsya</b>, implementando APIs de bancos, nuevas
              funcionalidades y migrando la base de datos de MySQL a AWS Cloud.
            </>
          ),
          skills: ["Laravel 11", "PHP", "taildwindcss", "MySQL", "aws"],
        },
      ],
    },
    en: {
      title: "Work experience",
      experiences: [
        {
          description: (
            <>
              I worked as a Full-Stack Developer at the{" "}
              <b>Ministry of Health</b> (Santa Fe - Argentina) on a project
              called{" "}
              <StyledLink
                href="https://www.santafe.gob.ar/ms/gcsalud/"
                target="_blank"
                rel="noopener noreferrer"
              >
                GC Salud
                <img
                  src="flechas-izquierda.png"
                  alt="GC Salud"
                  width="16"
                  height="16"
                />
              </StyledLink>
            </>
          ),
          skills: ["PHP", "Javascript", "Symfony", "MySQL", "HTML", "CSS"],
        },
        {
          description: (
            <>
              Currently working as a Full-Stack Laravel developer at a financial
              loan app called <b>Koinsya</b> & <b>adminKoinsya</b>, implementing
              bank apis, new funcionalities and migrating DB from mySQL to AWS
              Cloud.
            </>
          ),
          skills: ["PHP", "Laravel", "tailwindcss", "MySQL", "aws"],
        },
      ],
    },
  };

  return (
    <ExperienceWrapper id="experience">
      <ExperienceContent>
        <Title>{content[language].title}</Title>
        {content[language].experiences.map((experience, index) => (
          <React.Fragment key={index}>
            <ExperienceItem>
              <Description>{experience.description}</Description>
              <SkillsList>
                {experience.skills.map((skill, skillIndex) => (
                  <SkillItem
                    key={skillIndex}
                    onMouseEnter={() => setHoveredSkill(skill)}
                    onMouseLeave={() => setHoveredSkill(null)}
                  >
                    {skill}
                    <SkillIcon
                      src={`/${
                        skill === "HTML"
                          ? "html5"
                          : skill === "CSS"
                          ? "css3"
                          : skill.toLowerCase().replace(/[.\s]/g, "")
                      }.png`}
                      alt={`${skill} icon`}
                      style={{ opacity: hoveredSkill === skill ? 1 : 0 }}
                    />
                  </SkillItem>
                ))}
              </SkillsList>
            </ExperienceItem>
            {index < content[language].experiences.length - 1 && <Separator />}
          </React.Fragment>
        ))}
      </ExperienceContent>
      <ScrollToTopButton />
    </ExperienceWrapper>
  );
}

export default Experience;
