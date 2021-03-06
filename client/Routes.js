import React from 'react';
import { Switch, Redirect } from 'react-router-dom';
import { RouteWithLayout, PrivateRoute } from './components';
import { Main as MainLayout, Minimal as MinimalLayout } from './layouts';

import {
  Dashboard as DashboardView,
  Account as AccountView,
  Settings as SettingsView,
  SignUp as SignUpView,
  SignIn as SignInView,
  NotFound as NotFoundView,
  BusinessLoan as BusinessLoanView,
  PersonalLoan as PersonalLoanView,
  ExploreCampaigns as ExploreCampaignsView
} from './views';

const Routes = () => {

  return (
    <Switch>
      <Redirect
        exact
        from="/"
        to="/sign-in"
      />
      <PrivateRoute
        component={DashboardView}
        exact
        layout={MainLayout}
        path="/dashboard"
      />
      <PrivateRoute
        component={ExploreCampaignsView}
        exact
        layout={MainLayout}
        path="/explore"
      />
      <PrivateRoute
        component={BusinessLoanView}
        exact
        layout={MainLayout}
        path="/business-loan"
      />
      <PrivateRoute
        component={PersonalLoanView}
        exact
        layout={MainLayout}
        path="/personal-loan"
      />
      <PrivateRoute
        component={AccountView}
        exact
        layout={MainLayout}
        path="/account"
      />
      <PrivateRoute
        component={SettingsView}
        exact
        layout={MainLayout}
        path="/settings"
      />
      <RouteWithLayout
        component={SignUpView}
        exact
        layout={MinimalLayout}
        path="/sign-up"
      />
      <RouteWithLayout
        component={SignInView}
        exact
        layout={MinimalLayout}
        path="/sign-in"
      />
      <RouteWithLayout
        component={NotFoundView}
        exact
        layout={MinimalLayout}
        path="/not-found"
      />
      <Redirect to="/not-found" />
    </Switch>

  );
};

export default Routes;
