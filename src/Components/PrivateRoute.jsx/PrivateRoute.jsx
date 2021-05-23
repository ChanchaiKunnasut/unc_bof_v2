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

// import React from "react";
// import { Route, Redirect } from "react-router-dom";
// import PropTypes from "prop-types";
// import Cookies from "js-cookie";

// const RoutePrivate = props => {
//   const { layout: Layout, component: Component, ...rest } = props;
//   return (
//     <Route
//       {...rest}
//       render={matchProps => {
//         return Cookies.get("loggedIn") === "true"? (
//           <Layout>
//             <Component {...matchProps} />
//           </Layout>
//         ) : (
//           <Redirect
//             to={{
//               pathname: "/home",
//               state: { from: matchProps.location }
//             }}
//           />
//         );
//       }}
//     />
//   );
// };

// RoutePrivate.propTypes = {
//   component: PropTypes.any.isRequired,
//   layout: PropTypes.any.isRequired,
//   path: PropTypes.string
// };

// export default RoutePrivate;
