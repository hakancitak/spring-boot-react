import React from 'react';
import UserSignupPage from '../pages/UserSignupPage';
import { HashRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import { useSelector } from 'react-redux';
import LanguageSelector from '../components/LanguageSelector';
import TopBar from '../components/TopBar';

const App = () => {
  const { isLoggedIn } = useSelector(store => ({
    isLoggedIn: store.isLoggedIn
  }));

  return (
    <div>
      <Router>
          <TopBar></TopBar>
        <Switch>
         <Route path="/signup" component={UserSignupPage} />
       
        </Switch>
      </Router>
      <LanguageSelector></LanguageSelector>
    </div>
  );
};

export default App;
