import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import { Container } from 'semantic-ui-react';
import Home from './pages/home';
import Login from './pages/login';
import Register from './pages/register';
import MenuBar from './components/MenuBar';
import { AuthProvider } from './context/auth';
import AuthRoute from './util/AuthRoute';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Container>
          <MenuBar />
          <Route exact path='/' component={Home} />
          <AuthRoute exact path='/login' component={Login} />
          <AuthRoute exact path='/register' component={Register} />
        </Container>
      </Router>
    </AuthProvider>
  );
}

export default App;
