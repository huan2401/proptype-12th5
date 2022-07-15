import React from 'react';
import './App.less';
import '@/assets/vendors/styles';
// Routing
import { BrowserRouter as Router, Switch } from 'react-router-dom';


// Layouts
import DefaultLayout from '@/components/layouts/DefaultLayout';
import PrivateRoute from '@/components/common/PrivateRoute';

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <PrivateRoute path="/" title="Home" component={DefaultLayout} />
      </Switch>
    </Router>
  );
};

export default App;
