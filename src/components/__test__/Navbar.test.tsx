import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import NavBar from '../NavBar'

describe('NavBar Component', () => {
  const pushMock = jest.fn()
  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should render without crashing', () => {
    const {debug, getByText, getByAltText} = render(<NavBar location="/" history={{push: pushMock}}/>)
    const logo = getByText(/Catch Pokemon/i)
    const myPokeLogo = getByAltText(/poke-ball/i)

    expect(logo).toBeInTheDocument()
    expect(myPokeLogo).toBeInTheDocument()
    fireEvent.click(logo)
    expect(pushMock).toBeCalledTimes(1)
    // debug()
  })

  it('should render my-poke icon while path on /', () => {
    const {getByText} = render(<NavBar location="/" history={{push: pushMock}}/>)
    const iconText = getByText(/m y p o k e`/i)

    expect(iconText).toBeInTheDocument()
  })

  it('should not render my-poke icon while path on /my-poke', () => {
    const {queryByText} = render(<NavBar location="/my-poke" history={{push: pushMock}}/>)
    const iconText = queryByText(/m y p o k e`/i)
    
    expect(iconText).toBe(null)
  })

})