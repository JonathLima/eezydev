import imageUrlBuilder from '@sanity/image-url'
import { SanityImageSource } from '@sanity/image-url/lib/types/types'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { AboutMe } from 'components/AboutMe'
import { Header } from 'components/Header'
import { RocketButton } from 'components/RocketButton'
import { GetStaticProps } from 'next'
import Image from 'next/image'
import { useEffect } from 'react'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { GiWorld } from 'react-icons/gi'
import { SiGmail } from 'react-icons/si'
import { EffectCards } from 'swiper'
import 'swiper/css/bundle'
import { Swiper, SwiperSlide } from 'swiper/react'
import jsonTechsData from './../shared/techs.json'
import * as S from './../styles/pages'
import userImg from '/public/img/avatar-user.png'

type PostProps = {
  _id: string
  mainImage: SanityImageSource
  imageUrl: string
  title: string
  github: string
  page: string
}

type HomeProps = {
  toggleTheme(): void
  projects: PostProps[]
}

const Home = ({ toggleTheme, projects }: HomeProps) => {
  useEffect(() => {
    Aos.init()
  }, [toggleTheme])

  return (
    <>
      <RocketButton />
      <S.Wrapper>
        <Header toggleTheme={toggleTheme} />
        <S.Container id="home">
          <div data-aos="fade-right" className="user-image">
            <Image
              src={userImg}
              className="image"
              layout="intrinsic"
              width={550}
              height={550}
              priority
              alt="Jonathan Silva"
            />
          </div>

          <S.TextContainer data-aos="fade-left">
            <h1 className="typing">{'Hello World, my name is'}</h1>
            <p>{'Jonathan'}</p>
            <span>{'Mobile & Game Developer'}</span>
          </S.TextContainer>
          <S.SocialContainer>
            <S.Socials data-aos="fade-up">
              <a
                href="https://github.com/JonathSilva"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/jonathsilva/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="mailto:jonathansilvadacostalima@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <SiGmail />
              </a>
            </S.Socials>
            {/* <S.Resume data-aos="fade-up">
              <a
                href={`${process.env.PDF_RESUME}`}
                target="_blank"
                rel="noreferrer"
              >
                {'Resume'}
              </a>
            </S.Resume> */}
          </S.SocialContainer>
        </S.Container>
        <AboutMe />
        <S.TechContainer id="technologies">
          <h2 data-aos="fade-up">{'Technologies'}</h2>

          <S.Techs data-aos="fade-up">
            {jsonTechsData.techs.map((tech) => (
              <S.Technologies data-aos="flip-up" key={tech.id}>
                <img src={tech.imageUrl} alt={tech.name} />
                <span>{tech.name}</span>
              </S.Technologies>
            ))}
          </S.Techs>
        </S.TechContainer>

        <S.ProjectContainer id="projects">
          <h2 data-aos="fade-up">{'Projects'}</h2>

          <Swiper
            effect={'cards'}
            grabCursor={true}
            modules={[EffectCards]}
            className="mySwiper"
            data-aos="zoom-in-up"
          >
            {projects.map((project) => (
              <SwiperSlide key={project._id}>
                <img src={project.imageUrl} alt={project.title} />
                <div className="projectOptions">
                  <strong>{project.title}</strong>
                  <div className="links-projects">
                    <a href={project.github} target="_blank" rel="noreferrer">
                      <FaGithub />
                    </a>

                    <a href={project.page} target="_blank" rel="noreferrer">
                      <GiWorld />
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </S.ProjectContainer>
      </S.Wrapper>
      <S.FooterContaier>
        <footer>
          <div>
            <span>Copyright &copy; 2022 EEZYDEV</span>
          </div>
        </footer>
      </S.FooterContaier>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const query = encodeURIComponent(`${process.env.SANITY_QUERY}`)
  const url = `${process.env.SANITY_URL}${query}`

  const imgBuilder = imageUrlBuilder({
    projectId: `${process.env.SANITY_PROJECT_ID}`,
    dataset: `${process.env.SANITY_PROJECT_DATASET}`
  })

  const response = await fetch(url).then((res) => res.json())

  const projects = response.result

  const projectsFormatted = projects.map((project: PostProps) => {
    return {
      _id: project._id,
      title: project.title,
      mainImage: project.mainImage,
      imageUrl: imgBuilder.image(project.mainImage).toString(),
      github: project.github,
      page: project.page
    }
  })

  if (!projectsFormatted) {
    return {
      notFound: true
    }
  } else {
    return {
      props: { projects: projectsFormatted }
    }
  }
}

export default Home
