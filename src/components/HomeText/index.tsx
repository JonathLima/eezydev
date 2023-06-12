import { Socials } from 'components/Socials'
import * as S from './styles'

export const HomeText = () => {
  return (
    <>
      <S.TextContainer data-aos="fade-left">
        <h1 className="typing">{'Hello World, my name is'}</h1>
        <div className="text-container">
          <p className="my-name-title">{'Jonathan'}</p>
          <span className="act-deploy">{'Game Design | 3D Animation'}</span>
        </div>
        <Socials />
      </S.TextContainer>
    </>
  )
}
