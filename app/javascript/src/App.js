import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import React from 'react'

import { store } from './store'
import { Home } from './screens'

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" render={() => <Home />} />
          </Switch>
        </BrowserRouter>
      </Provider>
    )
  }
}

export default App
