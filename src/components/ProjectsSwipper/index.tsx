import 'swiper/css/bundle'
import { Swiper, SwiperSlide } from 'swiper/react'

import { SanityImageSource } from '@sanity/image-url/lib/types/types'
import { EffectCards } from 'swiper'

import Image from 'next/image'
import { FaGithub } from 'react-icons/fa'
import { GiWorld } from 'react-icons/gi'
import * as S from './styles'

type PostProps = {
  _id: string
  mainImage: SanityImageSource
  imageUrl: string
  title: string
  github: string
  page: string
}

type ProjectsSwipperProps = {
  projects: PostProps[]
}

export const ProjectsSwipper = ({ projects }: ProjectsSwipperProps) => {
  return (
    <>
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
              <Image
                className="image"
                src={project.imageUrl}
                fill
                alt={project.title}
              />
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
    </>
  )
}
