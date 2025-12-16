import React, { useContext, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-scroll';
import { LanguageContext } from './LanguageContext';

const shadowPopTr = keyframes`
  0% {
    box-shadow: 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e;
    transform: translateX(0) translateY(0);
  }
  100% {
    box-shadow: 1px -1px #3e3e3e, 2px -2px #3e3e3e, 3px -3px #3e3e3e, 4px -4px #3e3e3e, 5px -5px #3e3e3e, 6px -6px #3e3e3e, 7px -7px #3e3e3e, 8px -8px #3e3e3e;
    transform: translateX(-8px) translateY(8px);
  }
`;

const HeaderWrapper = styled.header`
  background: linear-gradient(to right, #6a11cb 0%, #2575fc 100%);
  padding: 1rem 2rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

const LogoWrapper = styled.div`
  cursor: pointer;
  position: relative;
  height: 2rem;
  width: 120px;
  display: flex;
  align-items: center;
`;

const LogoText = styled.h1`
  color: white;
  font-size: 1.5rem;
  margin: 0;
  animation: ${props => props.isAnimating ? shadowPopTr : 'none'} 0.3s cubic-bezier(0.470, 0.000, 0.745, 0.715) both;
  transition: transform 0.5s ease-out;
  transform: ${props => props.isAnimating ? 'none' : 'translateX(0) translateY(0)'};
`;

const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    text-align: center;
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  }
`;

const NavItem = styled.li`
  margin-left: 1.5rem;
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.1);
  }
  @media (max-width: 768px) {
    margin: 1rem 0;
  }
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-weight: 500;
  transition: opacity 0.3s ease;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

const LanguageButton = styled.button`
  background-color: transparent;
  color: white;
  border: 1px solid white;
  padding: 0.5rem 1rem;
  margin-left: 1.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 500;
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    transform: scale(1.1);
  }
  @media (max-width: 768px) {
    margin: 1rem 0;
  }
`;

const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  @media (max-width: 768px) {
    display: block;
  }
`;

function Header() {
  const { language, setLanguage } = useContext(LanguageContext);
  // const [isMenuOpen, setIsMenuOpen] = useState(true);
  // const [isAnimating, setIsAnimating] = useState(true);

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

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'es' : 'en');
  };

  // const handleLogoClick = () => {
  //   setIsAnimating(true);
  //   setTimeout(() => {
  //     setIsAnimating(false);
  //   }, 300);
  // };

  return (
    <HeaderWrapper>
      <Nav>
        <LogoWrapper >
          <LogoText >JuanZdev</LogoText>
        </LogoWrapper>
        {/* <MenuButton onClick={() => setIsMenuOpen(!isMenuOpen)}>
          ☰
        </MenuButton> */}
        <NavLinks >
          {navItems[language].map((item) => (
            <NavItem key={item.to}>
              <NavLink to={item.to} smooth={true} duration={500}>
                {item.text}
              </NavLink>
            </NavItem>
          ))}
          <NavItem>
            <LanguageButton onClick={toggleLanguage}>
              {language === 'en' ? 'ES' : 'EN'}
            </LanguageButton>
          </NavItem>
        </NavLinks>
      </Nav>
    </HeaderWrapper>
  );
}

export default Header;