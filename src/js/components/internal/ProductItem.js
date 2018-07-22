import React, {Component} from 'react';

class ProductItem extends Component {
  render() {
    return (
      <a className="item-list__item-card item" href="#">
        <div className="item-pic">
          <img className="item-pic-1" src="/img/catalogue-pics/product-catalogue__item-1.png" alt=""/>
          <div className="product-catalogue__product_favorite">
            <p></p>
          </div>
          <div className="arrow arrow_left"></div>
          <div className="arrow arrow_right"></div>
        </div>
        <div className="item-desc">
          <h4 className="item-name">Босоножки женские</h4>
          <p className="item-producer">Производитель: <span className="producer">Damlax</span></p>
          <p className="item-price">18 520</p>
          <div className="sizes">
            <p className="sizes__title">Размеры в наличии:</p>
            <p className="sizes__avalible">36, 37, 38, 39, 40, 41, 42</p>
          </div>
        </div>
      </a>
    );
  }
}

export default ProductItem;

