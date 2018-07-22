import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import SearchForm from "../internal/SearchForm";
import Basket from "../internal/Basket";

class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="top-menu">
          <div className="wrapper">
            <ul className="top-menu__items">
              <li className="top-menu__item">
                <a href="#">Возврат</a>
              </li>
              <li className="top-menu__item">
                <a href="#">Доставка и оплата</a>
              </li>
              <li className="top-menu__item">
                <a href="#">О магазине</a>
              </li>
              <li className="top-menu__item">
                <a href="#">Контакты</a>
              </li>
              <li className="top-menu__item">
                <a href="#">Новости</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="header-main">
          <div className="header-main__wrapper wrapper">
            <div className="header-main__phone">
              <a href="tel:+7-495-790-35-03">+7 495 79 03 5 03</a>
              <p>Ежедневно: с 09-00 до 21-00</p>
            </div>
            <div className="header-main__logo">
              <NavLink exact to="/">
                <h1>
                  <img src="/img/header-logo.png" alt="logotype"/>
                </h1>
              </NavLink>
              <p>Обувь и аксессуары для всей семьи</p>
            </div>
            <div className="header-main__profile">
              <div className="header-main__pics">
                <div className="header-main__pic header-main__pic_search">

                </div>
                <div className="header-main__pic_border"></div>
                <NavLink exact to="/favorite/">
                  <div className="header-main__pic header-main__pic_profile">
                    <div className="header-main__pic_profile_menu"></div>
                  </div>
                </NavLink>
                <div className="header-main__pic_border"></div>
                <div className="header-main__pic header-main__pic_basket header-main__pic_basket_menu_is-active">
                  <div className="header-main__pic_basket_full">1</div>
                  <div className="header-main__pic_basket_menu"></div>
                </div>
              </div>
              <SearchForm/>
            </div>

          </div>
          <Basket/>
        </div>
        <nav className="main-menu">
          <div className="wrapper">
            <ul className="main-menu__items">
              <li className="main-menu__item main-menu__item_sales">
                <a href="#">Акции</a>
              </li>
              <li className="main-menu__item main-menu__item_women">
                <NavLink exact to="/products/">
                  Женская обувь
                </NavLink>
              </li>
              <li className="main-menu__item main-menu__item_men">
                <a href="#">Мужская обувь</a>
              </li>
              <li className="main-menu__item main-menu__item_kids">
                <a href="#">Детская обувь</a>
              </li>
              <li className="main-menu__item main-menu__item_accessories">
                <a href="#">Аксессуары</a>
              </li>
              <li className="main-menu__item main-menu__item_home">
                <a href="#">Для дома</a>
              </li>
              <li className="main-menu__item main-menu__item_brands">
                <a href="#">Бренды</a>
              </li>
              <li className="main-menu__item main-menu__item_new">
                <a href="#">Новинки</a>
              </li>
            </ul>
          </div>

        </nav>
        <div className="dropped-menu">
          <div className="wrapper">
            <div className="dropped-menu__lists dropped-menu__lists_women">
              <h3 className="dropped-menu__list-title">Повод:</h3>
              <ul className="dropped-menu__list">
                <li className="dropped-menu__item">
                  <a href="#">Офис</a>
                </li>
                <li className="dropped-menu__item">
                  <a href="#">Вечеринка</a>
                </li>
                <li className="dropped-menu__item">
                  <a href="#">Свадьба</a>
                </li>
                <li className="dropped-menu__item">
                  <a href="#">Спорт</a>
                </li>
                <li className="dropped-menu__item">
                  <a href="#">Море</a>
                </li>
                <li className="dropped-menu__item">
                  <a href="#">Дом</a>
                </li>
                <li className="dropped-menu__item">
                  <a href="#">Повседневное</a>
                </li>
              </ul>
            </div>
            <div className="dropped-menu__lists dropped-menu__lists_three-coloumns">
              <h3 className="dropped-menu__list-title">Категории:</h3>
              <ul className="dropped-menu__list">
                <li className="dropped-menu__item">
                  <a href="#">Балетки</a>
                </li>
                <li className="dropped-menu__item">
                  <a href="#">Босоножки</a>
                </li>
                <li className="dropped-menu__item">
                  <a href="#">Ботильоны</a>
                </li>
                <li className="dropped-menu__item">
                  <a href="#">Ботинки</a>
                </li>
                <li className="dropped-menu__item">
                  <a href="#">Ботфорты</a>
                </li>
                <li className="dropped-menu__item">
                  <a href="#">Галоши</a>
                </li>
                <li className="dropped-menu__item">
                  <a href="#">Кеды и кроссовки</a>
                </li>
                <li className="dropped-menu__item">
                  <a href="#">Мокасины</a>
                </li>
                <li className="dropped-menu__item">
                  <a href="#">Полусапоги</a>
                </li>
                <li className="dropped-menu__item">
                  <a href="#">Резиновые сапоги</a>
                </li>
                <li className="dropped-menu__item">
                  <a href="#">Сабо</a>
                </li>
                <li className="dropped-menu__item">
                  <a href="#">Сапоги</a>
                </li>
                <li className="dropped-menu__item">
                  <a href="#">Сникерсы</a>
                </li>
                <li className="dropped-menu__item">
                  <a href="#">Тапочки</a>
                </li>
                <li className="dropped-menu__item">
                  <a href="#">Туфли</a>
                </li>
                <li className="dropped-menu__item">
                  <a href="#">Шлёпанцы и вьетнамки</a>
                </li>
              </ul>
            </div>
            <div className="dropped-menu__lists">
              <h3 className="dropped-menu__list-title">Сезон:</h3>
              <ul className="dropped-menu__list">
                <li className="dropped-menu__item">
                  <a href="#">Зима</a>
                </li>
                <li className="dropped-menu__item">
                  <a href="#">Весна</a>
                </li>
                <li className="dropped-menu__item">
                  <a href="#">Лето</a>
                </li>
                <li className="dropped-menu__item">
                  <a href="#">Осень</a>
                </li>
              </ul>
            </div>
            <div className="dropped-menu__lists">
              <h3 className="dropped-menu__list-title">Бренды:</h3>
              <ul className="dropped-menu__list">
                <li className="dropped-menu__item">
                  <a href="#">Albano</a>
                </li>
                <li className="dropped-menu__item">
                  <a href="#">Ballin</a>
                </li>
                <li className="dropped-menu__item">
                  <a href="#">Baldinini</a>
                </li>
                <li className="dropped-menu__item">
                  <a href="#">Damlax</a>
                </li>
                <li className="dropped-menu__item">
                  <a href="#">Pegia</a>
                </li>
                <li className="dropped-menu__item">
                  <a href="#">Renzi</a>
                </li>
                <li className="dropped-menu__item">
                  <a href="#">Все</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
