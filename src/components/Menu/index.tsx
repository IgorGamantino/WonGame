import { Menu2 as MenuIcon } from '@styled-icons/remix-fill/Menu2'
import {
  ShoppingCart as ShoppingCartIcon,
  Search as SearchIcon,
  Close as CloseIcon
} from '@styled-icons/material-outlined'
import { Logo } from 'components/Logo'

import {
  Wrapper,
  IconWrapper,
  LogoWrapper,
  IconContent,
  MenuFull,
  MenuNav,
  MenuLink,
  RegisterBox,
  CreateAccount
} from './styles'
import { useState } from 'react'
import { Button } from 'components/Button'

export const Menu = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Wrapper>
      <IconWrapper onClick={() => setIsOpen(true)}>
        <MenuIcon aria-label="Open Menu" />
      </IconWrapper>

      <LogoWrapper>
        <Logo hideOnMobile />
      </LogoWrapper>

      <IconContent>
        <IconWrapper>
          <SearchIcon aria-label="Search" />
        </IconWrapper>

        <IconWrapper>
          <ShoppingCartIcon aria-label="shopping cart" />
        </IconWrapper>
      </IconContent>

      <MenuFull isOpen={isOpen} aria-hidden={!isOpen}>
        <CloseIcon aria-label="Close Menu" onClick={() => setIsOpen(false)} />

        <MenuNav>
          <MenuLink href="a">Home</MenuLink>
          <MenuLink href="a">Explore</MenuLink>
        </MenuNav>

        <RegisterBox>
          <Button fullWidth size="large">
            Login in now
          </Button>

          <span>or</span>
          <CreateAccount href="/" title="Sign Up">
            Sign Up
          </CreateAccount>
        </RegisterBox>
      </MenuFull>
    </Wrapper>
  )
}
