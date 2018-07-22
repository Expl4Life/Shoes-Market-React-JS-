import React, {Component} from 'react';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Favorite from './components/pages/Favorite';
import MainPage from './components/pages/MainPage';
import Catalogue from './components/pages/Catalogue';
import ProductDetail from './components/pages/ProductDetail';
import Order from './components/pages/Order';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Header/>
          <Switch>
            <Route  path='/products/:id' component={ProductDetail}/>
            <Route  path='/products/' component={Catalogue}/>
            <Route  path='/favorite/' component={Favorite}/>
            <Route  path='/order/' component={Order}/>
            <Route exact path='/' component={MainPage}/>
          </Switch>
          <Footer/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
