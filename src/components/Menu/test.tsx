import { getByText, render, screen } from '@testing-library/react'
import FireEvent from '@testing-library/user-event'
import { debug } from 'console'

import { renderWithTheme } from 'utils/tests/helpers'

import { Menu } from '.'

describe('<Menu />', () => {
  it('should render the menu', () => {
    renderWithTheme(<Menu />)

    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Won Games/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/search/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/shopping cart/i)).toBeInTheDocument()
  })

  it('shoud handle the open/close mobile menu', () => {
    const { getByRole, debug } = renderWithTheme(<Menu />)

    //selecionar o menuFull

    const menu = getByRole('navigation', { hidden: true })

    //verifica se o menu ta fechado

    expect(menu.getAttribute('aria-hidden')).toBe('true')
    expect(menu).toHaveStyle({ opacity: 0 })

    //clicar no botao abrir o menu e verificar se ele abriu
    const ClickMenu = screen.getByLabelText(/Open Menu/i)

    FireEvent.click(ClickMenu)

    debug()
    expect(menu.getAttribute('aria-hidden')).toBe('false')
    expect(menu).toHaveStyle({ opacity: 1 })

    //clicar no botao de fechar o menu o menu e verifiicar se ele fechou
    const ButtonClose = screen.getByLabelText(/Close Menu/i)

    FireEvent.click(ButtonClose)

    expect(menu.getAttribute('aria-hidden')).toBe('true')
    expect(menu).toHaveStyle({ opacity: 0 })
  })
})
