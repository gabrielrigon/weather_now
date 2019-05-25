import { BrowserRouter, Switch, Route } from 'react-router-dom'
import React from 'react'

import { Home } from './screens'

class App extends React.Component {
  render() {
    return (
      <Provider>
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
