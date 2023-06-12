import imageUrlBuilder from '@sanity/image-url'
import { SanityImageSource } from '@sanity/image-url/lib/types/types'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { AboutMe } from 'components/AboutMe'
import { Footer } from 'components/Footer'
import { Header } from 'components/Header'
import { ProjectsSwipper } from 'components/ProjectsSwipper'
import { RocketButton } from 'components/RocketButton'
import Techs from 'components/Techs'
import { GetStaticProps } from 'next/types'
import { useEffect } from 'react'

import { HomeContainer } from 'components/HomeContainer'
import * as S from './../styles/pages'

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
        <HomeContainer />
        <AboutMe />
        <Techs />
        <ProjectsSwipper projects={projects} />
      </S.Wrapper>
      <Footer />
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
