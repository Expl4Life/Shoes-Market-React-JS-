import React, {Component} from 'react';
import RecentlyViewed from '../internal/RecentlyViewed';
import SimilarProducts from '../internal/SimilarProducts';
import ProductBigCard from '../internal/ProductBigCard';
import Breadcrumbs from '../common/Breadcrumbs';
import RESTapi from '../../RESTapi';
import { withRouter } from 'react-router-dom';
import '../../../css/style-product-card.css';

class ProductDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      product: null
    };

    this.onClickItem = this.onClickItem.bind(this);
  }

  componentDidMount() {
    this.getProduct();
  };

  getProduct() {
    let pathName = this.props.location && this.props.location.pathname;
    pathName && RESTapi.get(pathName)
      .then((data) => {
        data.data && this.setState({product: data.data});
      });
  }

  onClickItem() {
    this.getProduct();
  }

  render() {
    return (
      <div>
        <Breadcrumbs/>
        <ProductBigCard product={this.state.product}/>
        <RecentlyViewed onClick={this.onClickItem}/>
        {/*<SimilarProducts/>*/}
      </div>
    );
  }
}

export default withRouter(ProductDetail);

