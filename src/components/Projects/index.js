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
import amazonia from "../../images/amazonia.png";
import controle_financeiro from "../../images/controle_financeiro.png";
import drink_library from "../../images/drink_library.png";
import bloco from "../../images/bloco.png";
import serieflix from "../../images/serieflix.PNG";
import book from "../../images/book.PNG";
import lagfy from "../../images/lagfy_capa.PNG";
import covid from "../../images/covid.PNG";
import adventure from "../../images/adventure.PNG";
import book_share from "../../images/book_share.png";

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
      <ProjectH1>Main Projects</ProjectH1>
      <Carrousel breakPoints={breakPoints}>
        <ProjectCard>
          <ProjectImg
            src={book_share}
            alt="página da adventure trip- fullstack project"
          />
          <ProjectInfos>
            <ProjectTitle
              href="https://github.com/caiolagreca/dreams-trip"
              target="_blank"
              rel="noreferrer"
            >
              Book Share - Fullstack Project
            </ProjectTitle>
            <ProjectSubtitles>
              <ProjectSubtitle>Node.JS</ProjectSubtitle>
              <ProjectSubtitle>MongoDB</ProjectSubtitle>
              <ProjectSubtitle>Express</ProjectSubtitle>
              <ProjectSubtitle>CSS</ProjectSubtitle>
              <ProjectSubtitle>HTML</ProjectSubtitle>
            </ProjectSubtitles>
            <ProjectDescription>
              API development for application on a travel website. Features like
              API CRUD, encrypted passwords, data stored in MongoDB and even
              paid with Stripe.
            </ProjectDescription>
            <ProjectLinks>
              <ProjectLink
                href="https://github.com/caiolagreca/dreams-trip"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </ProjectLink>
            </ProjectLinks>
          </ProjectInfos>
        </ProjectCard>

        <ProjectCard>
          <ProjectImg
            src={adventure}
            alt="página da adventure trip- fullstack project"
          />
          <ProjectInfos>
            <ProjectTitle
              href="https://github.com/caiolagreca/dreams-trip"
              target="_blank"
              rel="noreferrer"
            >
              Adventure Trip - Fullstack Project
            </ProjectTitle>
            <ProjectSubtitles>
              <ProjectSubtitle>React.JS</ProjectSubtitle>
              <ProjectSubtitle>Node.JS</ProjectSubtitle>
              <ProjectSubtitle>MongoDB</ProjectSubtitle>
              <ProjectSubtitle>Express</ProjectSubtitle>
            </ProjectSubtitles>
            <ProjectDescription>
              Social media to share your book resumes. You can post, filter,
              like and dislike, follow others users and much more!
            </ProjectDescription>
            <ProjectLinks>
              <ProjectLink
                href="https://github.com/caiolagreca/book_social_app"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </ProjectLink>
              <ProjectLink
                href="https://book-share-rho.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                Site
              </ProjectLink>
            </ProjectLinks>
          </ProjectInfos>
        </ProjectCard>

        <ProjectCard>
          <ProjectImg src={covid} alt="plataforma covid-19 INFO" />
          <ProjectInfos>
            <ProjectTitle
              href="https://github.com/caiolagreca/covid_control"
              target="_blank"
              rel="noreferrer"
            >
              COVID-19 INFO
            </ProjectTitle>
            <ProjectSubtitles>
              <ProjectSubtitle>ReactJS</ProjectSubtitle>
              <ProjectSubtitle>Javascript</ProjectSubtitle>
            </ProjectSubtitles>
            <ProjectDescription>
              Page consuming Covid-19 API bringing updated information about
              cases, recovered and deaths in every country in the world.
            </ProjectDescription>
            <ProjectLinks>
              <ProjectLink
                href="https://github.com/caiolagreca/covid_control"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </ProjectLink>
              <ProjectLink
                href="https://covid-control-nu.vercel.app/"
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
            src={lagfy}
            alt="página da plataforma de controle financeiro"
          />
          <ProjectInfos>
            <ProjectTitle
              href="https://github.com/caiolagreca/spotify-clone"
              target="_blank"
              rel="noreferrer"
            >
              Lagfy - Spotify Clone
            </ProjectTitle>
            <ProjectSubtitles>
              <ProjectSubtitle>ReactJS</ProjectSubtitle>
              <ProjectSubtitle>Context API</ProjectSubtitle>
              <ProjectSubtitle>Javascript</ProjectSubtitle>
            </ProjectSubtitles>
            <ProjectDescription>
              Spotify clone, which consumes the API of the original platform,
              being possible a greater interactivity with the user. NOTE:
              Tablet-only responsiveness due to the platform having an App
              Specific for Smartphones.
            </ProjectDescription>
            <ProjectLinks>
              <ProjectLink
                href="https://github.com/caiolagreca/spotify-clone"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </ProjectLink>
            </ProjectLinks>
          </ProjectInfos>
        </ProjectCard>

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
              <ProjectSubtitle>ReactJS</ProjectSubtitle>
              <ProjectSubtitle>Javascript</ProjectSubtitle>
              <ProjectSubtitle>Firebase</ProjectSubtitle>
            </ProjectSubtitles>
            <ProjectDescription>
              E-commerce simulating the Amazon website, in which the user does
              the login, generating a database in Firebase. On the website it is
              possible add items to cart, delete them and proceed to checkout
              finalizing the purchase.
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
              Financial Control
            </ProjectTitle>
            <ProjectSubtitles>
              <ProjectSubtitle>ReactJS</ProjectSubtitle>
              <ProjectSubtitle>Javascript</ProjectSubtitle>
            </ProjectSubtitles>
            <ProjectDescription>
              Service platform for financial control, in which the user enter
              your inputs and outputs. Information stored in LocalStorage.
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
              <ProjectSubtitle>ReactJS</ProjectSubtitle>
              <ProjectSubtitle>Javascript</ProjectSubtitle>
            </ProjectSubtitles>
            <ProjectDescription>
              Drinks page in which the user searches for the desired drink
              through of an API request. When selecting the drink, it is
              possible to obtain information such as ingredients and method of
              preparation.
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
              Notepad
            </ProjectTitle>
            <ProjectSubtitles>
              <ProjectSubtitle>ReactJS</ProjectSubtitle>
              <ProjectSubtitle>Javascript</ProjectSubtitle>
            </ProjectSubtitles>
            <ProjectDescription>
              App in which the user can insert, edit and delete notes. To the
              information is stored in LocalStorage even after the page be
              closed.
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
              Landing Page of a bookstore in which the user can add the books in
              the cart, remove and choose the quantity, finalizing the purchase.
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
              Landing Page of a series page (simulating Netflix) with carousel.
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
