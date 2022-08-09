import React from "react";
import Carrousel from "react-elastic-carousel";
import {
  ProjectContainer,
  ProjectH1,
  ProjectCard,
  ProjectImg,
  ProjectInfos,
  ProjectTitle,
  ProjectSubtitles,
  ProjectSubtitle,
  ProjectDescription,
  ProjectLinks,
  ProjectLink,
} from "./ProjectsElements";
import project1 from "../../images/project1.jpg";
import amazonia from "../../images/amazonia.png";
import controle_financeiro from "../../images/controle_financeiro.png";
import drink_library from "../../images/drink_library.png";
import bloco from "../../images/bloco.png";
import serieflix from "../../images/serieflix.PNG";
import book from "../../images/book.PNG";

function Projects() {
  const breakPoints = [
    { width: 1, itemsToShow: 1, pagination: false },
    { width: 600, itemsToShow: 2, pagination: false },
    { width: 860, itemsToShow: 3, pagination: false },
    { width: 1100, itemsToShow: 4, pagination: false },
    { width: 1700, itemsToShow: 5, pagination: false },
  ];

  return (
    <ProjectContainer id="projetos">
      <ProjectH1>Principais projetos</ProjectH1>
      <Carrousel breakPoints={breakPoints}>
        <ProjectCard>
          <ProjectImg src={amazonia} alt="página principal do site Amazonia" />
          <ProjectInfos>
            <ProjectTitle
              href="https://github.com/caiolagreca/amazon_clone"
              target="_blank"
              rel="noreferrer"
            >
              Amazonia - Amazon Clone
            </ProjectTitle>
            <ProjectSubtitles>
              <ProjectSubtitle>React</ProjectSubtitle>
              <ProjectSubtitle>Javascript</ProjectSubtitle>
              <ProjectSubtitle>Firebase</ProjectSubtitle>
            </ProjectSubtitles>
            <ProjectDescription>
              E-commerce simulando o site da Amazon, no qual o usuário faz o
              login, gerando um banco de dados no Firebase. No site é possível
              adicionar itens ao carrinho, excluí-los e ir até o pagamento
              finalizando a compra.
            </ProjectDescription>
            <ProjectLinks>
              <ProjectLink
                href="https://github.com/caiolagreca/amazon_clone"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </ProjectLink>
              <ProjectLink
                href="https://amazonia-beta.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                Site
              </ProjectLink>
            </ProjectLinks>
          </ProjectInfos>
        </ProjectCard>

        <ProjectCard>
          <ProjectImg
            src={controle_financeiro}
            alt="página da plataforma de controle financeiro"
          />
          <ProjectInfos>
            <ProjectTitle
              href="https://github.com/caiolagreca/controle_financeiro"
              target="_blank"
              rel="noreferrer"
            >
              Plataforma de Controle Financeiro
            </ProjectTitle>
            <ProjectSubtitles>
              <ProjectSubtitle>React</ProjectSubtitle>
              <ProjectSubtitle>Javascript</ProjectSubtitle>
            </ProjectSubtitles>
            <ProjectDescription>
              Plataforma de serviço para controle financeiro, no qual o usuário
              insere suas entradas e saídas. Informações armazenadas no
              LocalStorage.
            </ProjectDescription>
            <ProjectLinks>
              <ProjectLink
                href="https://github.com/caiolagreca/controle_financeiro"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </ProjectLink>
              <ProjectLink
                href="https://controle-financeiro-bice.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                Site
              </ProjectLink>
            </ProjectLinks>
          </ProjectInfos>
        </ProjectCard>

        <ProjectCard>
          <ProjectImg
            src={drink_library}
            alt="página principal da biblioteca de filmes"
          />
          <ProjectInfos>
            <ProjectTitle
              href="https://github.com/caiolagreca/Drink_page"
              target="_blank"
              rel="noreferrer"
            >
              Drink Search
            </ProjectTitle>
            <ProjectSubtitles>
              <ProjectSubtitle>React</ProjectSubtitle>
              <ProjectSubtitle>Javascript</ProjectSubtitle>
            </ProjectSubtitles>
            <ProjectDescription>
              Página de Drinks no qual o usuário busca a bebida desejada através
              de uma requisição de API. Ao selecionar a bebida, é possível obter
              informações como ingredientes e modo de preparo.
            </ProjectDescription>
            <ProjectLinks>
              <ProjectLink
                href="https://github.com/caiolagreca/Drink_page"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </ProjectLink>
              <ProjectLink
                href="https://drink-library.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                Site
              </ProjectLink>
            </ProjectLinks>
          </ProjectInfos>
        </ProjectCard>

        <ProjectCard>
          <ProjectImg src={bloco} alt="imagem do app bloco de notas" />
          <ProjectInfos>
            <ProjectTitle
              href="https://github.com/caiolagreca/bloco_de_notas"
              target="_blank"
              rel="noreferrer"
            >
              Bloco de Notas
            </ProjectTitle>
            <ProjectSubtitles>
              <ProjectSubtitle>React</ProjectSubtitle>
              <ProjectSubtitle>Javascript</ProjectSubtitle>
            </ProjectSubtitles>
            <ProjectDescription>
              App no qual o usuário pode inserir, editar e deletar as notas. As
              informações ficam armazenadas no LocalStorage mesmo após a página
              ser fechada.
            </ProjectDescription>
            <ProjectLinks>
              <ProjectLink
                href="https://github.com/caiolagreca/bloco_de_notas"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </ProjectLink>
              <ProjectLink
                href="https://bloco-de-notas-lovat.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                Site
              </ProjectLink>
            </ProjectLinks>
          </ProjectInfos>
        </ProjectCard>

        <ProjectCard>
          <ProjectImg src={book} alt="Landing Page de e-commerce de livros" />
          <ProjectInfos>
            <ProjectTitle
              href="https://github.com/caiolagreca/BookHome"
              target="_blank"
              rel="noreferrer"
            >
              Book Store
            </ProjectTitle>
            <ProjectSubtitles>
              <ProjectSubtitle>HTML</ProjectSubtitle>
              <ProjectSubtitle>CSS</ProjectSubtitle>
              <ProjectSubtitle>Javascript</ProjectSubtitle>
            </ProjectSubtitles>
            <ProjectDescription>
              Landing Page de uma livraria no qual o usuário pode adicionar os
              livros no carrinho, remover e escolher a quantidade, finalizando a
              compra.
            </ProjectDescription>
            <ProjectLinks>
              <ProjectLink
                href="https://github.com/caiolagreca/BookHome"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </ProjectLink>
              <ProjectLink
                href="https://book-home.vercel.app/#"
                target="_blank"
                rel="noreferrer"
              >
                Site
              </ProjectLink>
            </ProjectLinks>
          </ProjectInfos>
        </ProjectCard>

        <ProjectCard>
          <ProjectImg
            src={serieflix}
            alt="imagem da Landing Page da Serieflix"
          />
          <ProjectInfos>
            <ProjectTitle
              href="https://github.com/caiolagreca/Interface-Serieflix"
              target="_blank"
              rel="noreferrer"
            >
              Serieflix
            </ProjectTitle>
            <ProjectSubtitles>
              <ProjectSubtitle>HTML</ProjectSubtitle>
              <ProjectSubtitle>CSS</ProjectSubtitle>
              <ProjectSubtitle>Javascript</ProjectSubtitle>
            </ProjectSubtitles>
            <ProjectDescription>
              Landing Page de uma página de seriados (simulando Netflix) com
              carrossel.
            </ProjectDescription>
            <ProjectLinks>
              <ProjectLink
                href="https://github.com/caiolagreca/Interface-Serieflix"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </ProjectLink>
              <ProjectLink
                href="https://interface-serieflix.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                Site
              </ProjectLink>
            </ProjectLinks>
          </ProjectInfos>
        </ProjectCard>
      </Carrousel>
    </ProjectContainer>
  );
}

export default Projects;
