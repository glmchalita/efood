import { ButtonHTMLAttributes, forwardRef, LegacyRef } from 'react'

import { ButtonStyled } from './styles'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}
// type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

// export function Button({ children, ...props }: ButtonProps) {
//   return <ButtonStyled {...props}>{children}</ButtonStyled>
// }

export const Button = forwardRef(function Button(
  { children, ...props }: ButtonProps,
  ref: LegacyRef<HTMLButtonElement>,
) {
  return (
    <ButtonStyled {...props} ref={ref}>
      {children}
    </ButtonStyled>
  )
})
