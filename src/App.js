import React from 'react'
import { Login, MainLayout } from './Pages'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import 'antd/dist/antd.css'

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path='/login' component={Login} />
          <Route exact path='/' component={MainLayout} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
