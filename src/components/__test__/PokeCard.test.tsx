import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import PokeCard from '../PokeCard'
import { RootContext } from '../../helpers/Context'
import { debug } from 'console'

describe('PokeCard component', () => {
  const myPokeListMock: any = [{name: 'PokeNameAny', defaultName: 'PokeNameAny', arwork: "PokeArtwork"}]
  const dispactMock = jest.fn()

  let nameMock = 'PokeName'
  const imageMock = 'PokeImage'
  const artworkMock = 'PokeArtwork'
  const moveToDetailMock = jest.fn()

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render without crashing', () => {
    const {debug, getByText, getByAltText} = render(
      <RootContext.Provider value={{myPokeList: myPokeListMock, dispact: dispactMock}}>
        <PokeCard
          name={nameMock}
          image={imageMock}
          artwork={artworkMock}
          moveToDetail={moveToDetailMock}
        />
      </RootContext.Provider>
    )
    const pokeNameText = getByText(/PokeName/i)
    const pokeIcon = getByAltText(/poke-icon/i)

    expect(pokeNameText).toBeInTheDocument()
    expect(pokeIcon).toBeInTheDocument()
    fireEvent.click(pokeIcon)
    expect(moveToDetailMock).toBeCalledTimes(1)
    // debug()
  })

  it('should render "Already obtained" if pokeName already exist in provider', () => {
    nameMock = 'PokeNameAny'
    const {getByText} = render(
      <RootContext.Provider value={{myPokeList: myPokeListMock, dispact: dispactMock}}>
        <PokeCard
          name={nameMock}
          image={imageMock}
          artwork={artworkMock}
          moveToDetail={moveToDetailMock}
        />
      </RootContext.Provider>
    )
    const obtaineText = getByText(/Already obtained/i)
    expect(obtaineText).toBeInTheDocument()
  })

  it('should render "Not caught yet" if pokeName not exist in provider', () => {
    nameMock = 'PokeName'
    const {getByText} = render(
      <RootContext.Provider value={{myPokeList: myPokeListMock, dispact: dispactMock}}>
        <PokeCard
          name={nameMock}
          image={imageMock}
          artwork={artworkMock}
          moveToDetail={moveToDetailMock}
        />
      </RootContext.Provider>
    )
    const obtaineText = getByText(/Not caught yet/i)
    expect(obtaineText).toBeInTheDocument()
  })
})