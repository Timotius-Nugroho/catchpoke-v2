import React from 'react'
import {render} from '@testing-library/react'
import Home from '../Home'

describe('Home Page', () => {
  const location = {pathname: "/"}
  const push = jest.fn()
  const history = {push}

  afterEach(() => {
    jest.clearAllMocks();
  });
  
  it('should render without crashing', async () => {
    const {debug, findByText} = render(
      <Home location={location} history={history} />
    )
    const homeTitle = await findByText(/Our Poke`mon/i)
    expect(homeTitle).toBeInTheDocument()
    // debug()
  })

})
