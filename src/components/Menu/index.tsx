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
import { MediaMatch } from 'components/MediaMatch'

type MenuProps = {
  username?: string
}

export const Menu = ({ username }: MenuProps) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Wrapper>
      <MediaMatch lessThan="medium">
        <IconWrapper onClick={() => setIsOpen(true)}>
          <MenuIcon aria-label="Open Menu" />
        </IconWrapper>
      </MediaMatch>

      <LogoWrapper>
        <Logo hideOnMobile />
      </LogoWrapper>

      <MediaMatch greaterThan="medium">
        <MenuNav>
          <MenuLink href="a">Home</MenuLink>
          <MenuLink href="a">Explore</MenuLink>
        </MenuNav>
      </MediaMatch>

      <IconContent>
        <IconWrapper>
          <SearchIcon aria-label="Search" />
        </IconWrapper>

        <IconWrapper>
          <ShoppingCartIcon aria-label="shopping cart" />
        </IconWrapper>
        {!username && (
          <MediaMatch greaterThan="medium">
            <Button>Sign in</Button>
          </MediaMatch>
        )}
      </IconContent>

      <MenuFull isOpen={isOpen} aria-hidden={!isOpen}>
        <CloseIcon aria-label="Close Menu" onClick={() => setIsOpen(false)} />

        <MenuNav>
          <MenuLink href="a">Home</MenuLink>
          <MenuLink href="a">Explore</MenuLink>

          {username && (
            <>
              <MenuLink href="a">My account</MenuLink>
              <MenuLink href="a">Wishlist</MenuLink>
            </>
          )}
        </MenuNav>

        {!username && (
          <RegisterBox>
            <Button fullWidth size="large">
              Login in now
            </Button>

            <span>or</span>
            <CreateAccount href="/" title="Sign Up">
              Sign Up
            </CreateAccount>
          </RegisterBox>
        )}
      </MenuFull>
    </Wrapper>
  )
}
