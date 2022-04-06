import { useState } from 'react'
import { IoMdRocket } from 'react-icons/io'
import * as S from './styles'

export const RocketButton = () => {
  const [showScroll, setShowScroll] = useState(false)

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 100) {
      setShowScroll(true)
    } else if (showScroll && window.pageYOffset <= 100) {
      setShowScroll(false)
    }
  }

  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', checkScrollTop)
  }

  const backToTop = () => {
    document.documentElement.scrollTop = 0
  }

  return (
    <>
      <S.RocketButton
        onClick={backToTop}
        active={`${showScroll ? 'active' : ''}`}
      >
        <IoMdRocket />
      </S.RocketButton>
    </>
  )
}
