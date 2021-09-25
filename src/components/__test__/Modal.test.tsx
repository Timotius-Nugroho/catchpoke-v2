import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Modal from '../Modal'
import { RootContext } from '../../helpers/Context'

describe('Modal Component', () => {
  let isChaughtMock = true
  const defaultNameMock = 'PokeName'
  const artworkMock = 'ArtworkPoke'
  const pushMock = jest.fn()
  const historyMock = {push: pushMock}
  const handleCloseMock = jest.fn()

  const myPokeListMock: any = [{name: "PokeNameAny", arwork: "PokeArtwork"}]
  const dispactMock = jest.fn()

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render input field & Save Button wihle isChaught true', () => {
    const {debug, getByPlaceholderText, getByText} = render(
      <RootContext.Provider value={{myPokeList: myPokeListMock, dispact: dispactMock}}>
        <Modal
          isChaught={isChaughtMock}
          defaultName={defaultNameMock}
          artwork={artworkMock}
          history={historyMock}
          handleClose={handleCloseMock}
        />
      </RootContext.Provider>
    )
    const inputField = getByPlaceholderText(/Give him a name.../i)
    const saveButton = getByText(/Save/i)

    expect(inputField).toBeInTheDocument()
    expect(saveButton).toBeInTheDocument()
    fireEvent.change(inputField, {target: {value: "NewPokeName"}})
    fireEvent.click(saveButton)
    expect(dispactMock).toBeCalledTimes(1)
    // debug()
  })

  it('should render Close button & say Sorry when isChaught false', () => {
    isChaughtMock = false
    const {debug, getByText} = render(
      <RootContext.Provider value={{myPokeList: myPokeListMock, dispact: dispactMock}}>
        <Modal
          isChaught={isChaughtMock}
          defaultName={defaultNameMock}
          artwork={artworkMock}
          history={historyMock}
          handleClose={handleCloseMock}
        />
      </RootContext.Provider>
    )
    const sorryText = getByText(/`opps... , please try again !!!`/i)
    const closeButton = getByText(/Close/i)

    expect(sorryText).toBeInTheDocument()
    expect(closeButton).toBeInTheDocument()
    fireEvent.click(closeButton)
    expect(handleCloseMock).toBeCalledTimes(1)
    // debug()
  })

  it('should disable Save Button if pokemon new name already exist', () => {
    isChaughtMock = true
    const {debug, getByPlaceholderText, getByText} = render(
      <RootContext.Provider value={{myPokeList: myPokeListMock, dispact: dispactMock}}>
        <Modal
          isChaught={isChaughtMock}
          defaultName={defaultNameMock}
          artwork={artworkMock}
          history={historyMock}
          handleClose={handleCloseMock}
        />
      </RootContext.Provider>
    )
    const inputField = getByPlaceholderText(/Give him a name.../i)
    
    fireEvent.change(inputField, {target: {value: "PokeNameAny"}})
    const saveButton = getByText(/Name Poke` already exist/i)
    expect(saveButton).toBeInTheDocument()
    expect(saveButton.getAttributeNames()).toContainEqual('disabled')
    // debug()
  })
})