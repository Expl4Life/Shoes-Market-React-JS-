import React, {Component} from 'react';
import Breadcrumbs from '../common/Breadcrumbs';
import OrderForm from '../forms/OrderForm';
import OrderItemList from '../internal/OrderItemList';
import '../../../css/style-order.css';

class Order extends Component {
  render() {
    return (
      <div className="wrapper order-wrapper">
        <Breadcrumbs/>
        <section className="order-process">
          <h2 className="order-process__title">Оформление заказа</h2>
          <div className="order-process__basket order-basket">
            <div className="order-basket__title">в вашей корзине:</div>

            <OrderItemList/>

            <div className="order-basket__summ">Итого:<span>
              12 050 руб.
              <i className="fa fa-rub" aria-hidden="true"></i></span>
            </div>
          </div>
          <OrderForm/>
        </section>
      </div>
    );
  }
}

export default Order;

