import { LabelHTMLAttributes } from 'react'
import { BurgIcon } from './styles'

type MenuProps = LabelHTMLAttributes<HTMLLabelElement>

export const BurgerMenu = (props: MenuProps) => {
  return (
    <>
      <BurgIcon {...props}>
        <input type="checkbox" />
        <span></span>
        <span></span>
        <span></span>
      </BurgIcon>
    </>
  )
}
