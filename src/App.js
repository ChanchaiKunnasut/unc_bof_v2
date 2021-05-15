import React from 'react'
import { Login, OrderList } from './Pages'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import 'antd/dist/antd.css'

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path='/'>
            <Login />
          </Route>
          <Route exact path='/order-list'>
            <OrderList />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
