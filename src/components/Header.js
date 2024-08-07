import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
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
`;

const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const NavItem = styled.li`
  margin-left: 1.5rem;
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
const handleScrollTo = (id) => (e) => {
  e.preventDefault();
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
};

function Header() {
return (
    <HeaderWrapper>
	<Nav>
		<Logo>JuanZdev</Logo>
		<NavLinks>
			{/* <NavItem>
				<Link to="home" smooth={true} duration={500}>Inicio</Link>
			</NavItem> */}
			<NavItem>
				<Link to="about" smooth={true} duration={500}>Sobre Mí</Link>
			</NavItem>
			<NavItem>
				<Link to="experience" smooth={true} duration={500}>Experiencia</Link>
			</NavItem>
			<NavItem>
				<Link to="skills" smooth={true} duration={500}>Habilidades</Link>
			</NavItem>
			<NavItem>
				<Link to="projects" smooth={true} duration={500}>Proyectos</Link>
			</NavItem>
			<NavItem>
				<Link to="contact" smooth={true} duration={500}>Contacto</Link>
			</NavItem>
		</NavLinks>
	</Nav>
    </HeaderWrapper>
);
}

export default Header;
