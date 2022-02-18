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
      <MenuIcon />
    </IconWrapper>

    <LogoWrapper>
      <Logo hideOnMobile />
    </LogoWrapper>

    <IconContent>
      <IconWrapper>
        <SearchIcon />
      </IconWrapper>

      <IconWrapper>
        <ShoppingCartIcon />
      </IconWrapper>
    </IconContent>
  </Wrapper>
)
