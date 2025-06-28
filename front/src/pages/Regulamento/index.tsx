import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Img from "../../assets/planejamento dias hackathon 2.png";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import {
  PageWrapper,
  HighlightSection,
  HighlightTextContainer,
  HighlightSubtitle,
  HighlightTitle,
  ContentContainer,
  IntroParagraph,
  ArticleSection,
  ArticleTitle,
  ArticleSubtitle,
  ArticleParagraph,
  StyledImage,
} from "./style";

const regulamentoData = [
  // Renomeado para evitar conflito com o nome do componente
  {
    titulo: "1. APRESENTAÇÃO",
    subtitulo: "",
    body: [
      "O presente regulamento estabelece as normas para o Hackathon de inteligência artificial aplicado à saúde pública, promovido pela Incubadora de Empresas da Coppe/UFRJ e pelo Cietec (Incubadora da USP), em parceria com NVIDIA, o Laboratório Nacional de Computação Científica (LNCC).",
    ],
  },
  {
    titulo: "2. OBJETIVO",
    subtitulo: "",
    body: [
      "O principal objetivo deste projeto é fomentar o desenvolvimento de soluções inovadoras para os desafios da regulação ambulatorial. Através do Hackathon de IA, buscamos criar ferramentas inteligentes que aprimorem a qualidade da regulação, otimizem o uso dos recursos de saúde e melhorem a experiência do usuário no sistema de saúde pública. O projeto visa:",
      "● Desenvolver soluções baseadas em IA para automatizar processos de regulação.",
      "● Melhorar a alocação de recursos e o agendamento de atendimentos.",
      "● Criar modelos preditivos para a gestão de demanda e otimização de escalas.",
    ],
  },
  {
    titulo: "3. DAS DATAS E LOCAL",
    subtitulo: "",
    body: [
      "O evento será realizado entre os dias 17 e 19 de outubro de 2025, no Porto Maravalley, localizado na Av. Prof. Pereira Reis, 76 – Santo Cristo, Rio de Janeiro – RJ, CEP: 20220-800. As atividades seguirão uma programação específica, que consta no item 7 deste regulamento.",
    ],
  },
  {
    titulo: "4. DA INSCRIÇÃO",
    subtitulo: "",
    body: [
      "● Perfil: Estudantes, profissionais, startups ou pesquisadores das áreas de saúde, TI, dados e gestão pública.",
      "● Inscrição gratuita via formulário online de 21/05/2025 à 13/08/2025.",
      "● Critérios de elegibilidade: Idade mínima de 18 anos.",
      "● Documentação obrigatória: CPF e currículo.",
      "A inscrição poderá ser realizada de forma individual (com posterior agrupamento em equipes aleatórias) ou por equipes previamente formadas. Na eventualidade de inscrição individual, a validação dessa inscrição ficará condicionada ao agrupamento de participantes individuais logo após a abertura do evento.",
      "Importante destacar que as equipes serão compostas por 5 (cinco) indivíduos, cabendo aos participantes decidirem entre se dividir em equipes e se inscrever ou realizar a inscrição individual para entrar em uma equipe aleatória. Para garantir a qualidade da experiência e a efetividade do processo avaliativo, o número de equipes participantes será limitado a, no máximo, 16 grupos, totalizando 80 pessoas.",
      "Interessados que, porventura, não possam participar do evento, poderão ficar em nossa base de dados para participação em eventos futuros. Contudo, aorganização do Hackathon não faz qualquer declaração, nem se obriga, de qualquer maneira, perante os inscritos no cadastro, à reserva de vaga em relação a qualquer evento, fato ou ato futuro.",
      "Ainda sobre as equipes, é recomendável que em cada uma delas conste pelo menos um participante com conhecimentos e/ou experiência em Programação eDesenvolvimento de aplicativo web ou mobile (back-end), ou participante na área de Design UX, Design digital ou Full Stack Design (front-end). Para todos os efeitos, o Hackathon não se limita à alunos ou profissionais da área, estando aberto para que a sociedade e qualquer indivíduo que se sinta preparado possa participar e apresentar soluções, juntamente com seu grupo.",
    ],
  },
  {
    titulo: "5. DESAFIOS",
    subtitulo: "",
    body: [
      "Os desafios do Hackathon serão definidos com o apoio de organizações de saúde e estarão centrados na melhoria da regulação do sistema público de saúde, com foco em eficiência, automação, inteligência artificial e previsão de demandas.",
      "As propostas deverão ser desenvolvidas a partir de três trilhas temáticas técnicas.",
      "Trilha 1 – Análise de Séries Temporais",
      "Objetivo: Utilizar dados históricos para gerar previsões que contribuam para o planejamento e gestão do SUS.",
      "Trilha 2 – Retrieval-Augmented Generation (RAG)",
      "Objetivo: Criar aplicações em que modelos de linguagem (como o GPT) consultem bases de dados estruturadas para apoiar decisões clínicas e administrativas.",
      "Trilha 3 – Criação de um Novo Sistema de Regulação com IA",
      "Objetivo: Utilizar IA para prototipar novas funcionalidades ou módulos que modernizem o sistema de regulação, com foco em automação, usabilidade e integração.",
      "Dentro das trilhas técnicas apresentadas, os participantes deverão desenvolver soluções para desafios previamente definidos, que se organizam em torno dos seguintes eixos temáticos:",
      "● Apoio à Inserção e Qualificação da Solicitação: Criar soluções que apoiem osolicitante na elaboração e qualificação das solicitações de atendimento,considerando protocolos clínicos e dados do prontuário eletrônico.",
      "● Apoio à Decisão Regulatória: Desenvolver ferramentas que automatizam e agilizam a análise das solicitações, baseadas em protocolos de menor complexidade.",
      "● Análise Preditiva de Demanda e Oferta: Utilizar IA para prever a demanda de procedimentos e sugerir ajustes na oferta de serviços com base em dados históricos.",
      "● Inteligência no Agendamento: Criar sistemas que recomendam o melhor local e horário de atendimento, levando em consideração a disponibilidade e a distância do paciente.",
      "● Gestão e Otimização de Recursos: Propor soluções para alocação otimizada de recursos humanos e escalas de atendimento, evitando sobrecarga e aumentando a eficiência do sistema.",
    ],
  },
  {
    titulo: "6. CRITÉRIOS DE AVALIAÇÃO",
    subtitulo: "",
    body: [
      "As soluções desenvolvidas pelos participantes durante o Hackathon serão avaliadas seguindo os seguintes critérios:",
      "● Impacto na saúde pública (30%): A solução deve demonstrar como pode melhorar a eficiência e qualidade dos serviços de saúde pública, especialmente no processo de regulação.",
      "● Viabilidade técnica (25%): Avaliação da capacidade da solução em ser implementada tecnicamente dentro do sistema de saúde público.",
      "● Inovação (20%): A originalidade e a utilização de novas tecnologias para resolver o desafio proposto.",
      "● Escalabilidade (15%): A capacidade da solução em ser expandida e aplicada em outros contextos ou regiões.",
      "● Apresentação (10%): Clareza e organização da apresentação da solução e seu impacto potencial.",

      "A banca avaliadora será composta por especialistas indicados pelas instituições parceiras e apoiadoras do evento, incluindo profissionais com saber nas áreas de Inteligência Artificial e saúde pública, patrocinadores nível Ouro, gestores de Saúde Pública, bem como representantes da Coppe/UFRJ, da Universidade Federal do Rio de Janeiro (UFRJ) e da Universidade de São Paulo (USP).",
      "A composição final da banca será divulgada posteriormente, observando critérios de competência técnica, diversidade institucional e alinhamento aos objetivos do hackathon.",
    ],
  },
  {
    titulo: "7. ETAPAS DO HACKATHON",
    subtitulo: "",
    body: [
      "O Hackathon de Inteligência Artificial será conduzido conforme o cronograma de fases a seguir, elaborado em parceria com a EloGroup.",
    ],
  },
  {
    titulo: "8. PREMIAÇÃO",
    subtitulo: "",
    body: [
      "O Hackathon de IA adotará um modelo colaborativo, no qual o prêmio de R$20.000,00 (vinte mil reais) será distribuído entre as 5 melhores equipes. A proposta busca valorizar o talento, a criatividade e o espírito de cooperação entre os participantes.",
      "Todos os participantes receberão certificados referentes aos treinamentos oferecidos durante o evento, reconhecendo o engajamento e a qualificação adquirida ao longo da jornada.",
      "As soluções mais inovadoras poderão ser incubadas como startups, com suporte estratégico e operacional oferecido pela Incubadora de Empresas da Coppe/UFRJ ou pelo Cietec (USP), possibilitando a continuidade e o desenvolvimento dos projetos selecionados.",
    ],
  },
  {
    titulo: "9. REGRAS DE CONDUTA",
    subtitulo: "",
    body: [
      "● Organização: Fornecer dados anonimizados de um portal de saúde, infraestrutura técnica (ex: acesso ao supercomputador Santos Dumont) e mentores.",
      "● Participantes: Ceder direitos de uso não exclusivo das soluções para o portal de saúde (se aplicável).",
      "● LGPD: Todos os dados utilizados devem seguir a Lei Geral de Proteção de Dados.",
      "O Hackathon de IA: Regulação do Sistema Público de Saúde visa criar um ambiente criativo, colaborativo e inovador. Para garantir uma experiência positiva para todos, é fundamental que todos os participantes ajam com respeito e civilidade.",

      "Ética e Respeito à Diversidade: O evento promove a inclusão e o respeito a todas as pessoas, independentemente de raça, etnia, gênero, orientação sexual, religião, deficiência ou qualquer outra característica pessoal. Qualquer forma de discriminação, racismo, intolerância ou assédio será severamente penalizada, incluindo a desqualificação imediata do participante ou equipe. Os participantes devem tratar uns aos outros com dignidade e promover um ambiente seguro e acolhedor.",

      "Comportamento Inadequado: A inobservância das instruções fornecidas pela equipe organizadora poderá resultar no cancelamento da inscrição do participante, sem possibilidade de nova inscrição. É absolutamente proibido o consumo de bebidas alcoólicas e a utilização indevida de drogas ou medicamentos durante o evento.",
      "Denúncias e Segurança: Caso qualquer atividade ou comportamento suspeito ocorra, ou se algo for identificado como violação dos princípios de ética e respeito, deve ser imediatamente reportado à equipe organizadora ou ao pessoal de segurança designado.",
      "Uso da Infraestrutura: Os participantes terão acesso gratuito à internet e a recursos de rede. A rede será monitorada por motivos de segurança, sendo permitida sua utilização exclusivamente para finalidades relacionadas ao Hackathon. Qualquer uso indevido dos recursos será passível de penalização.",
      "Responsabilidade: Os participantes são responsáveis por respeitar os direitos de propriedade intelectual de terceiros, incluindo direitos autorais e outros. A organização não se responsabiliza por eventuais violações de direitos por parte dos participantes.",
      "A organização do evento se reserva o direito de tomar as ações necessárias para garantir que as regras e a ética sejam respeitadas. Qualquer incidente ou violação será resolvido de forma soberana e irrecorrível pela equipe organizadora, salvo em casos que excedam sua competência legal.",
    ],
  },
  {
    titulo: "10. DO SIGILO E CONFIDENCIALIDADE",
    subtitulo: "",
    body: [
      "O participante deverá manter o mais absoluto sigilo com relação a qualquer informação recebida em decorrência da participação no evento. Da mesma forma, a organização se compromete, desde já, a manter sigilo total sobre todos os dados enviados pelos participantes. O banco de dados gerado em função das inscrições será de inteira propriedade da organização, que poderá utilizá-lo, sem qualquer ônus, para fins lícitos, da forma que melhor lhe aprouver. O participante autoriza a organização a divulgar seu nome e o título do projeto, tal qual informado na ficha de inscrição, para fins estatísticos e de divulgação dos resultados.",
    ],
  },
  {
    titulo: "11. DISPOSIÇÕES FINAIS",
    subtitulo: "",
    body: [
      "Quaisquer dúvidas, divergências ou situações não previstas neste Regulamento serão julgadas e decididas, de forma soberana e irrecorrível, pela organização do evento.",
      "Os participantes inscritos são responsáveis por acompanhar a programação, os resultados e eventuais alterações no evento.",
      "A participação no Hackathon, através da efetivação da inscrição, conforme definido neste Regulamento, bem como o posterior aceite online, implicam o conhecimento e total aceitação de todos os itens deste Regulamento.",
      "A aceitação online dos termos deste Regulamento, pelos participantes, condição prévia para a participação regular no Hackathon, também implicará a expressa autorização e licenciamento gratuitos, mundiais, livres de pagamento de royalties, por prazo indeterminado, à organização, a qualquer das empresas apoiadoras do evento, para fins de reprodução parcial ou integral, edição, adaptação, tradução para qualquer outro idioma, publicação, transmissão, emissão, distribuição e comunicação ao público por quaisquer meios e em quaisquer formatos de:",

      "1) nome, imagem, vídeo e voz dos participantes, que poderão ser gravados durante o período de participação neste evento, a critério da equipe organizadora;",
      "2) divulgação do escopo, conteúdo e funcionalidades do projeto vencedor. Os participantes vencedores ou qualquer dos participantes não terão direito ao recebimento de quaisquer valores, seja a que tempo e/ou a que título for, em virtude de qualquer forma de utilização, divulgação e reprodução do produto desenvolvido.",
      "Os participantes declaram, ainda, que qualquer funcionalidade dos respectivos projetos, bem como os próprios projetos desenvolvidos para a participação neste evento, não ofende ou venham a transgredir quaisquer direitos de terceiros, especialmente direitos de propriedade intelectual, e que não são ofensivos, injuriosos, difamadores, nem são de qualquer forma ilegais ou ilícitos.",
      "Não serão aceitas soluções tecnológicas copiadas ou reproduzidas, de forma total ou parcial, de outras fontes e/ou competições. A identificação de uma cópia, total ou parcial, será punida com a desclassificação do respectivo participante e/ou equipe.",
      "A organização não se responsabiliza pelo uso de bases de dados públicos e/ou privados pelos participantes do Hackathon em Saúde, exceto aquelas que serão fornecidas pelo comitê executivo para o desenvolvimento das soluções.",
    ],
  },
];

const Regulamento = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTarget === "top") {
      // Scrolla até o topo da página
      window.scrollTo({ top: 0 });
    }
  }, [location]);

  return (
    <>
      <Header />
      <PageWrapper>
        <HighlightSection>
          <HighlightTextContainer>
            <HighlightSubtitle>Hackathon IA 2025</HighlightSubtitle>
            <HighlightTitle>REGULAMENTO</HighlightTitle>
          </HighlightTextContainer>
        </HighlightSection>

        <ContentContainer>
          <IntroParagraph>
            Este regulamento contém as informações a respeito do evento e todas
            as regras aplicáveis ao HACKATHON IA 2025 e colocamos a disposição
            dos candidatos e futuros participantes para entendimento e
            direcionamento de toda realização do evento. Portanto, os
            candidatos/participantes, no ato de seu cadastro e inscrição aderem
            integralmente a todas as suas disposições, declarando que aceitam
            todos os termos deste regulamento.{" "}
          </IntroParagraph>

          {regulamentoData.map((info, index) => (
            <ArticleSection key={index}>
              <ArticleTitle>{info.titulo}</ArticleTitle>
              {info.subtitulo && (
                <ArticleSubtitle>{info.subtitulo}</ArticleSubtitle>
              )}

              {Array.isArray(info.body) ? (
                info.body.map((paragrafo, idx) => (
                  <ArticleParagraph key={idx}>{paragrafo}</ArticleParagraph>
                ))
              ) : (
                <ArticleParagraph>{info.body}</ArticleParagraph>
              )}

              {index === 6 && <StyledImage src={Img} alt="imagem cronograma" />}
            </ArticleSection>
          ))}
        </ContentContainer>
      </PageWrapper>
      <Footer />
    </>
  );
};

export default Regulamento;
