import React from "react";
import {
  Container,
  MapSection,
  LogoSection,
  LogoWrapper,
  Logo,
  LinksSection,
  StyledNavLink,
  RealizacaoSection,
  ContactSection,
  Subtitle,
  BodyText,
  FooterNote,
} from "./style";
import LogoHackaton from "../../assets/Logo2.png";

const Footer = () => {
  return (
    <Container>
      <MapSection>
        <LogoSection>
          <LogoWrapper>
            <Logo src={LogoHackaton} alt="Logo HackathonIA" />
          </LogoWrapper>
        </LogoSection>

        <LinksSection>
          <StyledNavLink to="/">Início</StyledNavLink>
          <StyledNavLink to="/cronograma">Cronograma</StyledNavLink>
          <StyledNavLink to="/desafios">Desafios</StyledNavLink>
          <StyledNavLink to="/materiais">Materiais</StyledNavLink>
          <StyledNavLink to="/regulamento">Regulamento</StyledNavLink>
          <StyledNavLink to="/patrocinador">Patrocinadores</StyledNavLink>
        </LinksSection>

        <RealizacaoSection>
          <Subtitle>Realização:</Subtitle>
          <BodyText>Incubadora de Empresas Coppe/UFRJ</BodyText>
          <BodyText>CIETEC</BodyText>
          <BodyText>FAPERJ</BodyText>
          <BodyText>Instituto Reditus</BodyText>
        </RealizacaoSection>

        <ContactSection>
          <Subtitle>Dúvidas? Fale conosco:</Subtitle>
          <BodyText>contato@contato.com.br</BodyText>
        </ContactSection>
      </MapSection>

      <FooterNote>
        © 2025 HackathonIA. Todos os direitos reservados.
      </FooterNote>
    </Container>
  );
};

export default Footer;
