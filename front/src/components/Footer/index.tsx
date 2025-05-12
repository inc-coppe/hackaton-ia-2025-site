import {
  Container,
  FooterNote,
  FooterWrapper,
  MapSection,
  LogoWrapper,
  Frame,
  Column,
  Subtitle,
  Logo,
  BodyText,
} from "./style";
import LogoHackaton from "../../assets/Logo2.png";

const Footer = () => {
  return (
    <Container>
      <FooterWrapper>
        <MapSection>
          <Frame>
            <LogoWrapper>
              <Logo src={LogoHackaton} alt="Logo HackathonIA" />
            </LogoWrapper>
          </Frame>
          <Column>
            <Subtitle>Início</Subtitle>
            <Subtitle>Cronograma</Subtitle>
            <Subtitle>Desafios</Subtitle>
            <Subtitle>Materiais</Subtitle>
            <Subtitle>Regulamento</Subtitle>
            <Subtitle>Patrocinadores</Subtitle>
          </Column>
          <Column>
            <Subtitle>Realização:</Subtitle>
            <BodyText>Incubadora de Empresas Coppe/UFRJ</BodyText>
            <BodyText>CIETEC</BodyText>
            <BodyText>FAPERJ</BodyText>
            <BodyText>Instituto Reditus</BodyText>
          </Column>
          <Column>
            <Subtitle>Dúvidas? Fale conosco:</Subtitle>
            <BodyText>contato@contato.com.br</BodyText>
          </Column>
        </MapSection>
      </FooterWrapper>
      <FooterNote>
        © 2025 HackathonIA. Todos os direitos reservados.
      </FooterNote>
    </Container>
  );
};

export default Footer;
