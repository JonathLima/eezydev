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

    if (bodySelector) {
      setIsCheck(!isCheck)

      if (!isCheck) {
        bodySelector.style.overflow = 'hidden'
      } else {
        bodySelector.style.overflow = 'auto'
      }
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
          <S.PageList active={`${isCheck ? "active" : ""}`}>
            {["Home", "Technologies", "Projects"].map((pages, index) => (
              <S.Url key={index}>
                <ul className="ul-header">
                  <li className="pages">
                    <Link
                      to={pages.toLowerCase()}
                      onClick={handleLabelClick}
                      smooth="true"
                      duration={200}
                    >
                      {pages}
                    </Link>
                  </li>
                </ul>
              </S.Url>
            ))}
            <S.HeaderSettings>
              <ButtonTheme onClick={toggleTheme} aria-label="Theme button" />
            </S.HeaderSettings>
          </S.PageList>
        </S.Container>
      ) : (
        <S.Container>
          <S.Logo>
            EEZY<span>.DEV</span>
          </S.Logo>
          <S.PageList>
            {["Home", "Technologies", "Projects"].map((pages, index) => (
              <S.Url key={index}>
                <ul className="ul-header">
                  <li className="pages">
                    <Link to={pages.toLowerCase()} smooth="true" duration={200}>
                      {pages}
                    </Link>
                  </li>
                </ul>
              </S.Url>
            ))}

            <S.HeaderSettings>
              <ButtonTheme onClick={toggleTheme} aria-label="Theme button" />
            </S.HeaderSettings>
          </S.PageList>
        </S.Container>
      )}
    </>
  );
}
