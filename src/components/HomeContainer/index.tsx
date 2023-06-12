import Image from 'next/image'
import userImg from '/public/img/avatar-user.png'

import { HomeText } from 'components/HomeText'
import * as S from './styles'

export const HomeContainer = () => {
  return (
    <>
      <S.Container id="home">
        <div data-aos="fade-right" className="user-image">
          <Image
            src={userImg}
            className="image"
            width={550}
            height={550}
            alt="Jonathan Silva"
          />
        </div>

        <HomeText />
      </S.Container>
    </>
  )
}
