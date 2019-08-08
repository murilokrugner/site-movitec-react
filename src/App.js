import React from 'react';
import { Router } from 'react-router-dom';
import Routes from './routes';
import history from './services/history';
import GlobalStyle from './styles/global';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <Router history={history}>
      <Routes />
      <Header />
      <Footer />
      <GlobalStyle />
    </Router>
  );
}

export default App;
