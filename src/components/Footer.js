import React, { useContext } from 'react';
import styled from 'styled-components';
import { LanguageContext } from './LanguageContext';


const FooterWrapper = styled.footer`
  background-color: #2c3e50;
  color: #ecf0f1;
  padding: 2rem 0;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding: 0 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const Copyright = styled.p`
  font-size: 0.9rem;
  margin: 0;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: 768px) {
    margin-top: 1rem;
  }
`;

const SocialLink = styled.a`
  color: #ecf0f1;
  font-size: 1.5rem;
  transition: color 0.3s ease;

  &:hover {
    color: #3498db;
  }
`;

function Footer() {
	const { language } = useContext(LanguageContext);
	const currentYear = new Date().getFullYear();

	const content = {
	es: {
		rights: "Todos los derechos reservados."
	},
	en: {
		rights: "All rights reserved."
	}
	};

	return (
	<FooterWrapper>
		<FooterContent>
		<Copyright>
			© {currentYear} JuanZdev. {content[language].rights}
		</Copyright>
		<SocialLinks>
			<SocialLink href="https://github.com/juanzorrilla95" target="_blank" rel="noopener noreferrer">
			<i className="fab fa-github"></i>
			</SocialLink>
			<SocialLink href="https://linkedin.com/in/juanzorrilla95" target="_blank" rel="noopener noreferrer">
			<i className="fab fa-linkedin"></i>
			</SocialLink>
		</SocialLinks>
		</FooterContent>
	</FooterWrapper>
	);
}

export default Footer;