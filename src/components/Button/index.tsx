import { ReactNode, ButtonHTMLAttributes } from 'react'
import { Wrapper } from './styles'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode
  size?: 'small' | 'medium' | 'large'
  fullWidth?: boolean
  icon?: ReactNode
}

export const Button = ({
  children,
  size = 'medium',
  fullWidth = false,
  icon,
  ...rest
}: ButtonProps) => (
  <Wrapper size={size} fullWidth={fullWidth} hasIcon={!!icon} {...rest}>
    {icon}
    {!!children && <span>{children}</span>}
  </Wrapper>
)
