import React from 'react'
import styled from 'styled-components'

import { Header, ForecastCard } from '../components'

const Wrapper = styled.div`
  margin: 1rem auto;
  max-width: 750px;
  width: 90%;
`


class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Wrapper>
          <ForecastCard cityName={'São Paulo'} />
        </Wrapper>
      </React.Fragment>
    )
  }
}

export default Home
