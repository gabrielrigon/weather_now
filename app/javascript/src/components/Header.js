import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  background-color: #56aaff;
  font-family: 'Roboto Slab', serif;
  padding: 1rem 0;
  text-align: center;
  width: 100%;
`

const Title = styled.h1`
  color: #fff;
`

const Header = props => {
  return (
    <Wrapper>
      <Title>Weather Now</Title>
    </Wrapper>
  )
}

export default Header
