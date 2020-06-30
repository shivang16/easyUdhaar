import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import auth from './../../auth/auth-helper';

const PrivateRoute = props => {
  const { layout: Layout, component: Component, ...rest } = props;

  return (
    <Route
      {...rest}
      render={matchProps => (
        auth.isAuthenticated() ? (
            <Layout>
                <Component {...matchProps} />
            </Layout>
        ) : (
            <Redirect to={{
                pathname: '/sign-in',
                state: {from: props.location}
            }}/>
        // )}
        )
      )}/>
  );
};

PrivateRoute.propTypes = {
  component: PropTypes.any.isRequired,
  layout: PropTypes.any.isRequired,
  path: PropTypes.string
};

export default PrivateRoute;
