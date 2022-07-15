import React from 'react';
import { Route } from 'react-router-dom';
import { IRoute } from '@/types';

const PrivateRoute: React.FC<IRoute> = ({
  component: Component,
  ...rest
}: IRoute) => {

  return (
    <Route
      {...rest}
      render={routeProps => Component && <Component {...routeProps} />}
    />
  );
};

export default PrivateRoute;
