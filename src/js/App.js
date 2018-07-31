import React, {Component} from 'react';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Favorite from './components/pages/Favorite';
import MainPage from './components/pages/MainPage';
import Catalogue from './components/pages/Catalogue';
import ProductDetail from './components/pages/ProductDetail';
import Order from './components/pages/Order';
import RESTapi from './RESTapi';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
// import qs from 'qs';
// // const {stringify, parse} = qs;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: []
    }
  }

  componentDidMount() {
    this.getCategories();
  }

  getCategories() {
    RESTapi.get('categories')
      .then((data) => {
        data && data.data && this.setState({categories : data.data});
      });
  }

  render() {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <div className="container">
          <Header categories={this.state.categories}/>
          <Switch>
            <Route path='/products/:id' component={ProductDetail}/>
            <Route path='/products/' component={Catalogue}/>
            <Route path='/favorite/' component={Favorite}/>
            <Route path='/order/' component={Order}/>
            <Route exact path='/' component={() => <MainPage categories={this.state.categories}/>}/>
          </Switch>
          <Footer/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
