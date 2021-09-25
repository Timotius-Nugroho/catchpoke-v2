import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import ObtainedPoke from '../ObtainedPoke'

describe('ObtainedPoke compnent', () => {
  const nameMock = 'PokeMock'
  const defaultNameMock = 'PokeDefaultMock'
  const artworkMock = 'ArtworkMock'
  const handleReleaseMock = jest.fn()
  const moveToDetailMock =jest.fn()
  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should render without crashing', () => {
    const {debug, getByAltText, getByText} = render(<ObtainedPoke
      name={nameMock}
      defaultName={defaultNameMock}
      artwork={artworkMock}
      handleRelease={handleReleaseMock}
      moveToDetail={moveToDetailMock}
    />)
    const pokeArtwork = getByAltText(/poke-mockup/i)
    const releaseButton = getByText(/release/i)

    expect(pokeArtwork).toBeInTheDocument()
    expect(pokeArtwork.getAttribute("src")).toBe(artworkMock)
    expect(releaseButton).toBeInTheDocument()
    fireEvent.click(pokeArtwork)
    expect(moveToDetailMock).toBeCalledTimes(1)
    fireEvent.click(releaseButton)
    expect(moveToDetailMock).toBeCalledTimes(1)
    // debug()
  })

})