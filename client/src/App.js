import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import Home from './pages/home';
import Login from './pages/login';
import Register from './pages/register';
import MenuBar from './components/MenuBar';

function App() {
  return (
    <Router>
      <MenuBar />
      <Route exact path='/' component={Home} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/register' component={Register} />
    </Router>
  );
}

export default App;
