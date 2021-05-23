import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import Cookies from 'js-cookie'

const PrivateRoute = ({ layout: Layout, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        return Cookies.get('loggedIn') ? <Component {...props} /> : <Redirect to='/login' />
      }}
    />
  )
}

export default PrivateRoute
