import React, { useContext } from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
import { LanguageContext } from './LanguageContext';

const HeaderWrapper = styled.header`
  background: linear-gradient(to right, #6a11cb 0%, #2575fc 100%);
  padding: 1rem 2rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.h1`
  color: white;
  font-size: 1.5rem;
  margin: 0;
  cursor: default;
`;

const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const NavItem = styled.li`
  margin-left: 1.5rem;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
    cursor: pointer;
  }
`;

const NavLink = styled.a`
  color: white;
  text-decoration: none;
  font-weight: 500;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.8;
  }
`;

const LanguageSelector = styled.select`
  margin-left: 1.5rem;
  background-color: transparent;
  color: white;
  border: 1px solid white;
  padding: 0.5rem;
  cursor: pointer;
`;

function Header() {
  const { language, setLanguage } = useContext(LanguageContext);

  const navItems = {
    en: [
      { to: "about", text: "About Me" },
      { to: "experience", text: "Experience" },
      { to: "skills", text: "Skills" },
      { to: "projects", text: "Projects" },
      { to: "contact", text: "Contact" }
    ],
    es: [
      { to: "about", text: "Sobre Mí" },
      { to: "experience", text: "Experiencia" },
      { to: "skills", text: "Habilidades" },
      { to: "projects", text: "Proyectos" },
      { to: "contact", text: "Contacto" }
    ],
    
  };

  return (
    <HeaderWrapper>
      <Nav>
        <Logo>JuanZdev</Logo>
        <NavLinks>
          {navItems[language].map((item) => (
            <NavItem key={item.to}>
              <Link to={item.to} smooth={true} duration={500}>
                {item.text}
              </Link>
            </NavItem>
          ))}
        </NavLinks>
        <LanguageSelector
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
        >
          <option value="en">EN</option>
          <option value="es">ES</option>
        </LanguageSelector>
      </Nav>
    </HeaderWrapper>
  );
}

export default Header;