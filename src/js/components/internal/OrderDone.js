import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';

class OrderDone extends Component {
  render() {
    return (
      <section className="order-done">
        <h2 className="order-done__title order-process__title">Заказ принят, спасибо!</h2>
        <div className="order-done__information order-info">
          <div className="order-info__item order-info__item_summ">
            <h3>Сумма заказа:</h3>
            <p>12 050 руб.<i className="fa fa-rub" aria-hidden="true"></i></p>
          </div>
          <div className="order-info__item order-info__item_pay-form">
            <h3>Способ оплаты:</h3>
            <p>Картой курьеру</p>
          </div>
          <div className="order-info__item order-info__item_customer-name">
            <h3>Имя клиента:</h3>
            <p>Каблучкова Антонина</p>
          </div>
          <div className="order-info__item order-info__item_adress">
            <h3>Адрес доставки:</h3>
            <p>г. Сапожок, б-р Кожевенников, д. 58 кв. 14</p>
          </div>
          <div className="order-info__item order-info__item_phone">
            <h3>Телефон:</h3>
            <p>8 908 668 78 78</p>
          </div>
        </div>
        <p className="order-done__notice">Данные о заказе отправлены на адрес <span>notbosaanymore@gmail.com.  </span>
        </p>
        <NavLink to="/products/">
          <button className="order-done__continue">продолжить покупки</button>
        </NavLink>
      </section>
    );
  }
}

export default OrderDone;

