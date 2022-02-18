import { Menu2 as MenuIcon } from '@styled-icons/remix-fill/Menu2'
import {
  ShoppingCart as ShoppingCartIcon,
  Search as SearchIcon
} from '@styled-icons/material-outlined'
import { Logo } from 'components/Logo'

import { Wrapper, IconWrapper, LogoWrapper, IconContent } from './styles'

export const Menu = () => (
  <Wrapper>
    <IconWrapper>
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
  </Wrapper>
)
