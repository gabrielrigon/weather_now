import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  background-color: #fefefe;
  border: 1px solid;
  border-color: #eee;
  border-radius: 5px;
  margin-bottom: 1rem;
  padding: .5rem 1rem;
  width: calc(100% - 2rem);

  &::after {
    clear: both;
    content: '';
    display: block;
  }
`

const CityName = styled.h2`
  color: #4a4a4a;
  display: block;
  width: 100%;

  @media (max-width: 599px) {
    text-align: center;
  }

  @media (min-width: 600px) {
    float: left;
    max-width: 60%;
  }
`

const Forecast = styled.div`
  width: 100%;

  @media (min-width: 600px) {
    float: left;
    max-width: 40%;
  }

  &::after {
    clear: both;
    content: '';
    display: block;
  }
`

const TemperatureWrapper = styled.div`
  float: left;
  text-align: center;
  width: 50%;

  @media (min-width: 600px) {
    text-align: right;
  }
`

const Temperature = styled.h2`
  color: #777;
  font-family: 'Roboto Slab', serif;

  @media (max-width: 599px) {
    font-size: 1.2rem;
  }
`

const ForecastCard = props => {
  const { cityName, forecast } = props
  const { fahrenheit, celsius } = forecast || {}

  return (
    <Wrapper>
      <CityName>{cityName}</CityName>
      <Forecast>
        <TemperatureWrapper>
          <Temperature>{fahrenheit || '--'} ºF</Temperature>
        </TemperatureWrapper>
        <TemperatureWrapper>
          <Temperature>{celsius || '--'} ºC</Temperature>
        </TemperatureWrapper>
      </Forecast>
    </Wrapper>
  )
}

export default ForecastCard
