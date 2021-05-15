import React from 'react'
import { Login, OrderList } from "./Pages"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/">
            <OrderList />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
