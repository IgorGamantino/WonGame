import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import { Heading } from '.'

describe('<Heading />', () => {
  it('should be render a black text by default', () => {
    renderWithTheme(<Heading>Most Populars</Heading>)

    expect(screen.getByText('Most Populars')).toHaveStyle({
      color: '#030517'
    })
  })

  it('should be render blank text with white property', () => {
    renderWithTheme(<Heading color="white">Most Populars</Heading>)

    expect(screen.getByText('Most Populars')).toHaveStyle({
      color: '#FAFAFA'
    })
  })

  it('should be render a left edge with the line left property', () => {
    renderWithTheme(<Heading lineLeft>Most Populars</Heading>)

    expect(screen.getByText('Most Populars')).toHaveStyle({
      borderLeft: '0.7rem solid #3CD3C1'
    })
  })

  it('should render a bottom border with the line bottom property', () => {
    renderWithTheme(<Heading lineBottom>Most Populars</Heading>)

    expect(screen.getByText('Most Populars')).toHaveStyle({
      marginBottom: '3.2rem'
    })
  })
})
