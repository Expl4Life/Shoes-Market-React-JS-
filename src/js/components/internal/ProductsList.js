import React, {Component} from 'react';
import ProductItem from './ProductItem';

class ProductsList extends Component {
  render() {
    let list = [];

    for (let i = 0; i < 12; i++) {
      list.push(<ProductItem key={i}/>);
    }

    return (
      <section className="product-catalogue__item-list product-catalogue__item-list_favorite">
        {list}
      </section>
    );
  }
}

export default ProductsList;

