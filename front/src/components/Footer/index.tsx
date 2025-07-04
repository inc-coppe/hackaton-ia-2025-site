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
          <StyledNavLink to="/" state={{ scrollTarget: "top" }}> Início</StyledNavLink>
          <StyledNavLink to="/cronograma" state={{ scrollTarget: "top" }}>Cronograma</StyledNavLink>
          <StyledNavLink to="/desafios" state={{ scrollTarget: "top" }}>Desafios</StyledNavLink>
          <StyledNavLink to="/materiais" state={{ scrollTarget: "top" }}>Materiais</StyledNavLink>
          <StyledNavLink to="/regulamento" state={{ scrollTarget: "top" }}>Regulamento</StyledNavLink>
          <StyledNavLink to="/patrocinador" state={{ scrollTarget: "top" }}>Patrocinadores</StyledNavLink>
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
          <BodyText>hackathon@incubadora.coppe.ufrj.br</BodyText>
        </ContactSection>
      </MapSection>

      <FooterNote>
        © 2025 HackathonIA. Todos os direitos reservados.
      </FooterNote>
    </Container>
  );
};

export default Footer;
