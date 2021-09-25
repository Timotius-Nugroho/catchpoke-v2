import React from 'react'
import {render, act} from '@testing-library/react'
import Detail from '../Detail'
import {getPokemon as getPokemonMock} from '../../api/index'

jest.mock('../../api/index')

describe('Detail Page', () => {
  const location = {pathname: "/detail", search: "?name=pokename&artwork=pokeartwork"}
  const push = jest.fn()
  const history = {push}
  const mockData = {
    stats: [{stat: "SampleStat", base: 90}],
    moves: ['SampleMove'],
    types: ['sampleType']
  }

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render without crashing', async () => {
    (getPokemonMock as unknown as jest.Mock).mockResolvedValueOnce(mockData)
    await act(async () => {
      const {rerender, getByAltText, getByText, debug} = render(
        <Detail location={location} history={history}/>
      )
      const pokeName = getByText(/pokename/i)
      const pokeImage = getByAltText(/poke-artwork/i)

      expect(pokeName).toBeInTheDocument()
      expect(pokeImage).toBeInTheDocument()
      expect(pokeImage.getAttribute("src")).toBe('pokeartwork')
      // debug()
      rerender(
        <Detail location={location} history={history}/>
      )
    })
    expect(getPokemonMock).toBeCalledTimes(1)
  })
})