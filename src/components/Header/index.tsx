import { useEffect, useState } from 'react'
import { useMediaQuery } from 'react-responsive'
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
            {['Home', 'Technologies', 'Projects'].map((pages) => (
              <S.Url key={pages.length}>
                <li className="pages">
                  <a
                    onClick={handleLabelClick}
                    href={`#${pages.toLowerCase()}`}
                  >
                    {pages}
                  </a>
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
            {['Home', 'Technologies', 'Projects'].map((pages) => (
              <S.Url key={pages.length}>
                <li className="pages">
                  <a href={`#${pages.toLowerCase()}`}>{pages}</a>
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
