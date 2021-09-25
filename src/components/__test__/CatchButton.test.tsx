import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import CatchButton from '../CatchButton'

describe('CatchButton component', () => {
  const handleCatchMock = jest.fn()
  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should render without crashing', () => {
    const {debug, getByText} = render(<CatchButton handleCatch={handleCatchMock} isCalc={false} />)
    const catchButton = getByText(/catch this poke`/i)
    expect(catchButton).toBeInTheDocument()
    fireEvent.click(catchButton)
    expect(handleCatchMock).toBeCalledTimes(1)
    // debug()
  })

  it('should disbale button while calculating your luck', () => {
    const isCaclMock = true
    const {debug, getByText} = render(<CatchButton handleCatch={handleCatchMock} isCalc={isCaclMock} />)
    const catchButton = getByText(/Calculating your luck .../i)
    
    expect(catchButton).toBeInTheDocument()
    expect(catchButton.getAttributeNames()).toContainEqual('disabled')
    // debug()
  })
})