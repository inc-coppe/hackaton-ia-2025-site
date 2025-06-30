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
      "O presente regulamento estabelece as normas para o Hackathon de inteligência artificial aplicado à saúde pública, promovido pela Incubadora de Empresas da Coppe/UFRJ e pelo Cietec (Incubadora da USP), em parceria com NVIDIA, o Laboratório Nacional de Computação Científica (LNCC) e a Secretaria Municipal de Saúde do Rio de Janeiro (SMS-RJ).",
    ],
  },
  {
    titulo: "2. OBJETIVO",
    subtitulo: "",
    body: [
      "O principal objetivo deste projeto é fomentar o desenvolvimento de soluções inovadoras para os desafios da regulação ambulatorial. Através do Hackathon de IA, buscamos criar ferramentas inteligentes que aprimorem a qualidade da regulação, otimizem o uso dos recursos de saúde e melhorem a experiência do usuário no sistema de saúde pública. Para um maior impacto positivo na saúde pública, as soluções desenvolvidas no evento serão publicadas em código aberto com licença Linux. O projeto visa:",
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
      "● Inscrição gratuita via formulário online de 21/05/2025 à 13/08/2025.",
      "● Critérios de elegibilidade: Idade mínima de 18 anos.",
      "● Documentação obrigatória: CPF e currículo.",
      
      "A participação no Hackathon está condicionada ao fornecimento obrigatório de dados pessoais solicitados no formulário de inscrição. Ao se inscrever, o participante autoriza expressamente o tratamento e o compartilhamento de seus dados com a equipe organizadora, única e exclusivamente para fins relacionados à organização, logística, comunicação, composição de equipes, avaliação dos projetos e divulgação de resultados do evento.",

      "Os dados coletados serão tratados em estrita conformidade com a Lei Geral de Proteção de Dados Pessoais (Lei nº 13.709/2018 - LGPD). A equipe organizadora se compromete a utilizar os dados de forma transparente, segura e adequada às finalidades do Hackathon, garantindo os direitos de acesso, correção, revogação de consentimento e eliminação dos dados, mediante solicitação por parte do/a titular.",

      "Todos os inscritos poderão participar do treinamento pré-evento oferecido pela NVIDIA. A seleção para o Hackathon será baseada no desempenho nesse treinamento e na análise de currículo. Os candidatos aprovados nesta etapa estarão aptos a participar do evento do Hackathon. Cada equipe será composta por 5 (cinco) integrantes, sendo responsabilidade dos próprios participantes organizarem suas equipes. Para facilitar esse processo, a organização criará um grupo em rede social reunindo todos os selecionados. A fim de garantir a qualidade da experiência e a efetividade do processo avaliativo, a participação será limitada a, no máximo, 16 equipes, totalizando até 80 pessoas.",

      "Interessados que, porventura, não possam participar do evento, poderão ficar em nossa base de dados para participação em eventos futuros. Contudo, a organização do Hackathon não faz qualquer declaração, nem se obriga, de qualquer maneira, perante os inscritos no cadastro, à reserva de vaga em relação a qualquer evento, fato ou ato futuro.",

      "Ainda sobre as equipes, é recomendável que em cada uma delas conste pelo menos um participante com conhecimentos e/ou experiência em Programação e Desenvolvimento de aplicativo web ou mobile (back-end), ou participante na área de Design UX, Design digital ou Full Stack Design (front-end). Para todos os efeitos, o Hackathon não se limita à alunos ou profissionais da área, estando aberto para que a sociedade e qualquer indivíduo que se sinta preparado possa participar e apresentar soluções, juntamente com seu grupo."
    ],
  },
  {
    titulo: "5. DESAFIOS",
    subtitulo: "",
    body: [
      "Neste hackathon, os participantes terão acesso ao Data Lake da Saúde do Rio de Janeiro, um vasto repositório de dados sobre atendimentos, unidades, profissionais e equipamentos do SUS, além de contar com o poder de processamento do supercomputador Santos Dumont, um dos mais avançados da América Latina. Os desafios apresentados visam utilizar a inteligência artificial para otimizar a gestão de recursos e transformar dados brutos em insights valiosos para a saúde pública.",

      "Desafio 1 – Análise Preditiva e Gestão de Recursos em Saúde",

      "O sistema de saúde pública enfrenta desafios contínuos de alocação eficiente de recursos, superlotação e longas filas de espera. A análise preditiva é uma ferramenta poderosa para ajudar a antecipar demandas e melhorar a gestão.",
      
      "Os participantes serão desafiados a construir modelos preditivos a partir de dados históricos de atendimentos e faltas (no-shows), com foco nas seguintes áreas:",

      "● Previsão de no-show: Desenvolver modelos que identifiquem padrões de absenteísmo, ajudando na reprogramação de atendimentos e alocação eficiente de recursos.",

      "● Previsão de superlotação: Criar sistemas que prevejam sobrecargas nas unidades de saúde, possibilitando a gestão proativa de filas e o encaminhamento adequado dos pacientes.",
      
      "● Identificação de sobrecarga de equipamentos e profissionais: Detectar equipamentos e profissionais com alta demanda, para otimizar a alocação de recursos e evitar o desgaste.",
      
      "● Segmentação de perfis de pacientes: Analisar dados para identificar grupos de risco com maior probabilidade de faltar ao atendimento ou de necessitar de atenção especial.",
      
      "● Simulação de cenários: Testar diferentes políticas e estratégias de alocação de recursos, como ampliação de horários ou redistribuição de profissionais, para avaliar os impactos na gestão de filas e na qualidade do atendimento.",

      "● Detecção de anomalias: Identificar comportamentos fora do padrão, como subutilização de recursos ou problemas pontuais em determinadas regiões ou unidades.",

      "Este desafio visa fornecer ferramentas para uma gestão mais inteligente e eficaz dos recursos de saúde, reduzindo custos e melhorando a qualidade do atendimento.",

      "Desafio 2 – RAG e Diálogo com Dados em Linguagem Natural",

      "O grande volume de dados gerados pelo sistema de saúde só é útil quando transformado em insights acionáveis. Este desafio convida os participantes a desenvolver soluções que utilizem RAG (Retrieval-Augmented Generation) e interfaces de linguagem natural para facilitar a interação com os dados e gerar informações valiosas.",

      "Os participantes deverão criar sistemas que permitam:",

      "● Geração automática de insights: Desenvolver algoritmos capazes de extrair padrões e informações relevantes dos dados brutos, oferecendo recomendações para gestores e profissionais de saúde.",

      "● Consultas em linguagem natural: Construir interfaces que permitam que usuários façam perguntas em linguagem simples e obtenham respostas precisas a partir dos dados de saúde disponíveis.",
      
      "● Interfaces de diálogo e análise: Criar plataformas conversacionais e visuais que democratizam o acesso a análises avançadas, facilitando a interação dos gestores e profissionais de saúde com os dados.",
      
      "● Multimodalidade de dados: Integrar dados estruturados e não estruturados, como registros clínicos e relatórios administrativos, para fornecer uma análise completa.",
      
      "● Suporte à decisão clínica e gerencial: Desenvolver sistemas que ajudem na tomada de decisões, combinando dados históricos com políticas públicas e evidências científicas.",

      "● Explicabilidade e transparência: Garantir que os modelos gerem respostas explicáveis e que os usuários possam entender os critérios utilizados para a geração dos insights.",

      "● Acessibilidade e usabilidade: Construir interfaces inclusivas e de fácil uso, capazes de atender a diversos perfis de usuários, desde gestores a cidadãos comuns.",

      "● Segurança e ética nos dados: Aplicar boas práticas de anonimização e controle de acesso, assegurando que os dados sensíveis sejam protegidos e utilizados de forma ética.",

      "Este desafio busca transformar os dados em recursos acessíveis e acionáveis para todos os envolvidos na gestão da saúde pública.",

      "Além dos desafios propostos, incentivamos os participantes a explorar o Data Lake da Saúde do Rio de Janeiro, identificar padrões ocultos e propor soluções para problemas latentes que não foram explicitamente mencionados nos desafios. O hackathon é um espaço para inovação aberta, onde a criatividade, aliada aos dados, pode revelar novas oportunidades para transformar a saúde pública.",
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
