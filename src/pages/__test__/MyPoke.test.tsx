import React from 'react'
import {render} from '@testing-library/react'
import MyPoke from '../MyPoke'
import {RootContext} from '../../helpers/Context'

describe("MyPoke Page", () => {
  const location = {pathname: "/my-poke"}
  const push = jest.fn()
  const history = {push}

  const myPokeListMock: any = [{name: "PokeNameAny", arwork: "PokeArtwork"}]
  const dispactMock = jest.fn()

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render without crashing', () => {
    const {debug, getByText} = render(
      <RootContext.Provider value={{myPokeList: myPokeListMock, dispact: dispactMock}}>
        <MyPoke location={location} history={history} />
      </RootContext.Provider>
    )
    const pageTitle = getByText(/PokeNameAny/i)
    const namePokeObtained = getByText(/PokeNameAny/i)

    expect(pageTitle).toBeInTheDocument()
    expect(namePokeObtained).toBeInTheDocument()
    // debug()
  })
})