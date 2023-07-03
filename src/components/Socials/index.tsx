import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { SiArtstation, SiTwitch } from 'react-icons/si'

import * as S from './styles'

export const Socials = () => {
  return (
    <>
      <S.SocialContainer data-aos="fade-up">
        <S.Socials>
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
          {/* <a
            href="mailto:jonathansilvadacostalima@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <SiGmail />
          </a> */}
          <a
            href="https://www.artstation.com/jonathlima"
            target="_blank"
            rel="noreferrer"
          >
            <SiArtstation />
          </a>
          <a
            href="https://www.twitch.tv/eezyjb"
            target="_blank"
            rel="noreferrer"
          >
            <SiTwitch />
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
    </>
  )
}
