import React from 'react'
import { Login, MainLayout } from './Pages'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import 'antd/dist/antd.css'
import { PrivateRoute } from './Components'

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path='/login' component={Login} />
          <PrivateRoute exact path={["/", "/ordering", "/orderlist"]} component={MainLayout} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
