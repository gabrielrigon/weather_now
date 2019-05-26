import { connect } from 'react-redux'
import React from 'react'
import styled from 'styled-components'

import { forecastActions } from '../actions'
import { Header, ForecastCard } from '../components'
import { forecastErrorMessages } from '../utils'

const Wrapper = styled.div`
  margin: 1rem auto;
  max-width: 750px;
  width: 90%;
`

const Search = styled.div`
  width: 100%;

  &::after {
    clear: both;
    content: '';
    display: block;
  }
`

const SearchBox = styled.input`
  border: 1px solid;
  border-color: #aaa;
  border-radius: 5px;
  color: #434343;
  font-size: 1.2rem;
  margin-bottom: 1rem;
  outline-color: #cacaca;
  padding: 0.7rem;
  width: calc(85% - 1.4rem);

  @media (max-width: 700px) {
    width: calc(75% - 1.4rem);
  }
`

const SearchButton = styled.button`
  border: 1px solid;
  border-color: #aaa;
  border-radius: 5px;
  float: right;
  font-size: 1.2rem;
  height: 100%;
  outline-color: #cacaca;
  padding: 0.7rem;
  width: calc(15% - 0.7rem);

  @media (max-width: 700px) {
    width: calc(25% - 0.7rem);
  }
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
  border: 1px solid;
  border-color: #aaa;
  border-radius: 5px;
  color: #555;
  outline: none;
  padding: 0.5rem;
`

class Home extends React.Component {
  componentDidMount = () => {
    const { fetchForecast } = this
    fetchForecast()
  }

  fetchForecast = () => {
    const { fetchForecast, searchTerm } = this.props
    if (searchTerm) fetchForecast(searchTerm)
  }

  onSearchButtonClicked = () => {
    const { fetchForecast } = this
    fetchForecast()
  }

  onReloadButtonClicked = () => {
    const { fetchForecast } = this
    fetchForecast()
  }

  onSearchBoxTyped = e => {
    const { changeTerm } = this.props
    const term = e.target.value

    changeTerm(term)
  }

  render() {
    const {
      onSearchButtonClicked,
      onReloadButtonClicked,
      onSearchBoxTyped
    } = this

    const { searchTerm, city, forecast, loading, error } = this.props

    return (
      <React.Fragment>
        <Header />
        <Wrapper>
          <Search>
            <SearchBox
              type="text"
              placeholder="Anywhere..."
              value={searchTerm}
              onChange={onSearchBoxTyped}
            />
            <SearchButton onClick={onSearchButtonClicked}>Search</SearchButton>
          </Search>

          {error ? (
            <Error>
              <Message>
                {forecastErrorMessages.fromHttpStatusCode(error)}
              </Message>
              {error !== 404 && (
                <ReloadButton onClick={onReloadButtonClicked}>
                  Try again
                </ReloadButton>
              )}
            </Error>
          ) : (
            <React.Fragment>
              {city ? (
                <React.Fragment>
                  {loading ? (
                    <Message>Loading...</Message>
                  ) : (
                    <ForecastCard city={city} forecast={forecast} />
                  )}
                </React.Fragment>
              ) : (
                <Message>Choose your city to show weather info!</Message>
              )}
            </React.Fragment>
          )}
        </Wrapper>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => {
  const { searchTerm, city, forecast, loading, error } = state.forecast

  return {
    searchTerm,
    city,
    forecast,
    loading,
    error
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchForecast: city => {
      dispatch(forecastActions.fetch(city))
    },
    changeTerm: term => {
      dispatch(forecastActions.changeTerm(term))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
