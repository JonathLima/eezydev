import * as S from './styles'

export const Footer = () => {
  const actualYear = new Date().getFullYear()

  return (
    <>
      <S.FooterContaier>
        <footer>
          <div>
            <span>Copyright &copy; {actualYear} EEZY.DEV</span>
          </div>
        </footer>
      </S.FooterContaier>
    </>
  )
}
