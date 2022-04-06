import { ButtonHTMLAttributes, useState } from 'react'
import { BsSunFill } from 'react-icons/bs'
import { RiMoonFill } from 'react-icons/ri'
import { BtnSwitch, Link } from './styles'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export const ButtonTheme = (props: ButtonProps) => {
  const [changeIcon, setChangeIcon] = useState(false)

  const handleSwitchImage = () => {
    if (!changeIcon) {
      setChangeIcon(true)
    } else {
      setChangeIcon(false)
    }
  }

  return (
    <>
      <Link onClick={handleSwitchImage}>
        <BtnSwitch {...props}>
          {changeIcon ? (
            <BsSunFill size={30} className="btn-light" />
          ) : (
            <RiMoonFill size={30} className="btn-dark" />
          )}
        </BtnSwitch>
      </Link>
    </>
  )
}
