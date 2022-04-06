import { useEffect, useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import { Link } from 'react-scroll'
import { ButtonTheme } from '../../components/ButtonTheme'
import { BurgerMenu } from '../BurgerMenu'
import * as S from './styles'

type HeaderProps = {
  toggleTheme(): void
}

export const Header = ({ toggleTheme }: HeaderProps) => {
  const [isCheck, setIsCheck] = useState(false)

  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 960px)' })

  const handleLabelClick = () => {
    const bodySelector = document.querySelector('body')
    //const burguerSelector = document.getElementsByClassName('burger')
    if (!isCheck) {
      setIsCheck(true)
      bodySelector!.style.overflow = 'hidden'
    } else {
      bodySelector!.style.overflow = 'auto'
      setIsCheck(false)
    }
  }

  useEffect(() => {
    setIsCheck(false)
  }, [isTabletOrMobile])

  return (
    <>
      {isTabletOrMobile ? (
        <S.Container>
          <S.Logo>
            EEZY<span>.DEV</span>
          </S.Logo>
          <BurgerMenu onChange={handleLabelClick} />
          <S.PageList active={`${isCheck ? 'active' : ''}`}>
            {['Home', 'Technologies', 'Projects'].map((pages, index) => (
              <S.Url key={index}>
                <li className="pages">
                  <Link to={pages.toLowerCase()}>
                    <a onClick={handleLabelClick}>{pages}</a>
                  </Link>
                </li>
              </S.Url>
            ))}
            <S.HeaderSettings>
              <ButtonTheme onClick={toggleTheme} />
            </S.HeaderSettings>
          </S.PageList>
        </S.Container>
      ) : (
        <S.Container>
          <S.Logo>
            EEZY<span>.DEV</span>
          </S.Logo>
          <S.PageList>
            {['Home', 'Technologies', 'Projects'].map((pages, index) => (
              <S.Url key={index}>
                <li className="pages">
                  <Link to={pages.toLowerCase()}>
                    <a>{pages}</a>
                  </Link>
                </li>
              </S.Url>
            ))}
            <S.HeaderSettings>
              <ButtonTheme onClick={toggleTheme} />
            </S.HeaderSettings>
          </S.PageList>
        </S.Container>
      )}
    </>
  )
}
