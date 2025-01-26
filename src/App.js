import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';
import AccountManagement from './pages/AccountManagement';
import Settings from './pages/Settings';
import ForgotPassword from './pages/ForgotPassword';
import Verification from './pages/Verification';
import NotFound from './pages/NotFound'; // Import NotFound component
import './App.css';
import Footer from './components/Footer'

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <Route path="/verification" component={Verification} />
          <Route path="/forgot-password" component={ForgotPassword} />
          <Route path="/:username/" exact render={(props) => <Dashboard {...props} username={props.match.params.username} />} />
          <Route path="/:username/account" render={(props) => <AccountManagement {...props} username={props.match.params.username} />} />
          <Route path="/:username/settings" render={(props) => <Settings {...props} username={props.match.params.username} />} />
          <Route component={NotFound} /> {/* Use NotFound component */}
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;