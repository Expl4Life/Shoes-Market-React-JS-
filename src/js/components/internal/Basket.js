import React, {Component} from 'react';
import BasketItemList  from './BasketItemList';
import { NavLink } from 'react-router-dom';

class Basket extends Component {
  render() {
    return (
      <div className="header-main__hidden-panel hidden-panel header-main__hidden-panel_visible">
        <div className="hidden-panel__profile hidden-panel__profile_visible">
          <a href="#">Личный кабинет</a>
          <NavLink to="/favorite/">
            <i className="fa fa-heart-o" aria-hidden="true"></i>Избранное
          </NavLink>
          <a href="#">Выйти</a>
        </div>
        <div className="hidden-panel__basket basket-dropped hidden-panel__basket_visible">
          <div className="basket-dropped__title">В вашей корзине:</div>
          <BasketItemList/>
          <NavLink to="/order/" className="basket-dropped__order-button">
            Оформить заказ
          </NavLink>
        </div>
      </div>
    );
  }
}


export default Basket;
