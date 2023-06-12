import Image from 'next/image'
import jsonTechsData from './../../shared/techs.json'
import * as S from './styles'

const Techs = () => {
  return (
    <>
      <S.TechContainer id="technologies">
        <h2 data-aos="fade-up">{'Technologies'}</h2>

        <S.Techs data-aos="fade-up">
          {jsonTechsData.techs.map((tech) => (
            <S.Technologies data-aos="flip-up" key={tech.id}>
              <Image
                src={tech.imageUrl}
                width={100}
                height={100}
                alt={tech.name}
              />
              <span>{tech.name}</span>
            </S.Technologies>
          ))}
        </S.Techs>
      </S.TechContainer>
    </>
  )
}

export default Techs
