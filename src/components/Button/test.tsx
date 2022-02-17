import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import { AddShoppingCart } from '@styled-icons/material-outlined/'

import { Button } from '.'

describe('<Button />', () => {
  it('should render the Button', () => {
    renderWithTheme(<Button>Button</Button>)

    expect(screen.getByRole('button', { name: 'Button' })).toBeInTheDocument()
  })

  it('should be render the Button size default medium', () => {
    renderWithTheme(<Button>Button</Button>)

    expect(screen.getByRole('button', { name: 'Button' })).toHaveStyle({
      height: '4rem',
      padding: '0.8rem 3.2rem'
    })
  })

  it('it should  render small button size', () => {
    renderWithTheme(<Button size="small">Button</Button>)

    expect(screen.getByRole('button', { name: 'Button' })).toHaveStyle({
      height: '3rem',
      padding: '0.8rem'
    })
  })

  it('it should  render  button fullWidth', () => {
    renderWithTheme(<Button fullWidth>Button</Button>)

    expect(screen.getByRole('button', { name: 'Button' })).toHaveStyle({
      width: '100%'
    })
  })

  it('it should  render an icon version', () => {
    renderWithTheme(
      <Button icon={<AddShoppingCart data-testid="icon" />}>Button</Button>
    )

    expect(screen.getByTestId('icon')).toBeInTheDocument()
  })
})
