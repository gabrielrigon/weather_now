import { connect } from 'react-redux'
import React from 'react'
import styled from 'styled-components'

import { forecastActions } from '../actions'
import { Header, ForecastCard } from '../components'

const Wrapper = styled.div`
  margin: 1rem auto;
  max-width: 750px;
  width: 90%;
`

const Message = styled.p`
  color: #777;
  text-align: center;
`

const Error = styled.div`
  margin-top: 1rem;
  text-align: center;
`

const ReloadButton = styled.button`
  border-color: #aaa;
  border-radius: 5px;
  border: 1px solid;
  color: #555;
  outline: none;
  padding: .5rem;
` 

class Home extends React.Component {
  componentDidMount = () => {
    const { fetchForecast } = this.props
    fetchForecast()
  }

  onReloadButtonClicked = () => {
    const { fetchForecast } = this.props
    fetchForecast()
  }

  render() {
    const { onReloadButtonClicked } = this
    const { city, forecast, loading, error } = this.props

    return (
      <React.Fragment>
        <Header />
        <Wrapper>
          {loading ? (
            <Message>Carregando...</Message>
          ) : (
            <React.Fragment>
              {error ? (
                <Error>
                  <Message>Falha ao carregar os dados 😭</Message>
                  <ReloadButton onClick={onReloadButtonClicked}>Tentar novamente</ReloadButton>
                </Error>
              ) : (
                <ForecastCard city={city} forecast={forecast} />
              )}
            </React.Fragment>
          )}
        </Wrapper>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => {
  const { city, forecast, loading, error } = state.forecast

  return {
    city,
    forecast,
    loading,
    error
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchForecast: () => {
      dispatch(forecastActions.fetch())
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
