import { screen, render } from '@testing-library/react'

import Map from '.'

describe('<Map />', () => {
  it('should render without any marker', () => {
    render(<Map />)

    expect(
      screen.getByRole('link', {
        name: /a javascript library for interactive maps/i,
      })
    ).toBeInTheDocument()
  })

  it('should render with the marker int the right place', () => {
    const places = [
      {
        id: '1',
        name: 'Petrópolis',
        slug: 'petropolis',
        location: {
          latitude: 0,
          longitude: 0,
        },
      },
      {
        id: '2',
        name: 'Reykjavik',
        slug: 'reykjavik',
        location: {
          latitude: 129,
          longitude: -50,
        },
      },
    ]

    render(<Map places={places} />)

    expect(screen.getByTitle(/petrópolis/i)).toBeInTheDocument()
    expect(screen.getByTitle(/reykjavik/i)).toBeInTheDocument()
  })
})
