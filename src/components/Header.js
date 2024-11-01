import React, { useContext, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-scroll';
import { LanguageContext } from './LanguageContext';

const spin = keyframes`
  0% {
    transform: rotate(0deg) scale(1);
  }
  50% {
    transform: rotate(180deg) scale(0.5);
  }
  100% {
    transform: rotate(360deg) scale(1);
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
  perspective: 1000px;
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
  transition: opacity 0.3s ease;
  opacity: ${props => props.isAnimating ? 0 : 1};
`;

const LogoSymbol = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  color: white;
  font-size: 1.2rem;
  opacity: ${props => props.isAnimating ? 1 : 0};
  animation: ${props => props.isAnimating ? spin : 'none'} 1s ease-in-out;
  width: 30px;
  height: 30px;
  border: 2px solid white;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &::before {
    content: "JZ";
    font-weight: bold;
    font-style: italic;
  }
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

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

  const handleLogoClick = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setIsAnimating(false);
    }, 1000);
  };

  return (
    <HeaderWrapper>
      <Nav>
        <LogoWrapper onClick={handleLogoClick}>
          <LogoText isAnimating={isAnimating}>JuanZdev</LogoText>
          <LogoSymbol isAnimating={isAnimating} />
        </LogoWrapper>
        <MenuButton onClick={() => setIsMenuOpen(!isMenuOpen)}>
          ☰
        </MenuButton>
        <NavLinks isOpen={isMenuOpen}>
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