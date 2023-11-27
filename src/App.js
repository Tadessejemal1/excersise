import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import RegistrationComponent from './components/registration';
import LoginComponent from './components/login';
import DocumentManagementComponent from './components/documentManagement';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/register" component={RegistrationComponent} />
        <Route path="/login" component={LoginComponent} />
        <Route path="/documents" component={DocumentManagementComponent} />
      </Switch>
    </Router>
  );
};

export default App;
