import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import SellItem from './pages/SellItem';
import './styles/main.css';

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/product/:id" component={ProductDetails} />
        <Route path="/sell" component={SellItem} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;