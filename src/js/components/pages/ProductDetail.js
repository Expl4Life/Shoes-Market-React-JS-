import React, {Component} from 'react';
import RecentlyViewed from '../internal/RecentlyViewed';
import SimilarProducts from '../internal/SimilarProducts';
import ProductBigCard from '../internal/ProductBigCard';
import Breadcrumbs from '../common/Breadcrumbs';
import '../../../css/style-product-card.css';

class ProductDetail extends Component {
  render() {
    return (
      <div>
        <Breadcrumbs/>
        <ProductBigCard/>
        <RecentlyViewed/>
        <SimilarProducts/>
      </div>
    );
  }
}

export default ProductDetail;

