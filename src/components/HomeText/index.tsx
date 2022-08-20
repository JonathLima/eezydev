import * as S from './styles'

export const HomeText = () => {
  return (
    <>
      <S.TextContainer data-aos="fade-left">
        <h1 className="typing">{'Hello World, my name is'}</h1>
        <p>{'Jonathan'}</p>
        <div>
          <span>{'Software Engineer'}</span>
        </div>
      </S.TextContainer>
    </>
  )
}
