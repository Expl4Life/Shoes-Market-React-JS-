import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import RESTapi from '../../RESTapi';

class RecentlyViewed extends Component {
  constructor(props) {
    super(props);

    this.state = {
      productList: []
    };

  }

  componentDidMount() {
    let item = sessionStorage.getItem('viewedItems');
    let sessionObject = item && JSON.parse(sessionStorage.getItem('viewedItems'));

    if (sessionObject && typeof sessionObject === 'object') {
      let productList = Object.values(sessionObject);
      this.setState({productList});
    }
  }

  render() {
    let {productList} = this.state;
    console.log(productList);

    if (!productList || !productList.length) {
      return null;
    }

    return (
      <section className="product-catalogue__overlooked-slider">
        <h3>Вы смотрели:</h3>
        <div className="overlooked-slider">
          {/*<div className="overlooked-slider__arrow overlooked-slider__arrow_left arrow"></div>*/}
          {productList.map((item) => {
            return (
              <div key={item.id}>
                <div className="overlooked-slider__item" style={{backgroundImage: `url(${item.images[0]})`}}>
                  <NavLink
                    to={`${RESTapi.getPathNames.products}${item.id}`}
                    onClick={this.props.onClick}
                  />
                </div>
              </div>
            )
          })};
          {/*<div className="overlooked-slider__arrow overlooked-slider__arrow_right arrow"></div>*/}
        </div>
      </section>
    );
  }
}

export default RecentlyViewed;

//
// <section className="product-catalogue__overlooked-slider">
//   <h3>Вы смотрели:</h3>
//   <div className="overlooked-slider">
//     <div className="overlooked-slider__arrow overlooked-slider__arrow_left arrow"></div>
//     <div className="overlooked-slider__item overlooked-slider__item-1">
//       <a href="product-card-desktop.html"></a>
//     </div>
//     <div className="overlooked-slider__item overlooked-slider__item-2">
//       <a href="product-card-desktop.html"></a>
//     </div>
//     <div className="overlooked-slider__item overlooked-slider__item-3">
//       <a href="product-card-desktop.html"></a>
//     </div>
//     <div className="overlooked-slider__item overlooked-slider__item-4">
//       <a href="product-card-desktop.html"></a>
//     </div>
//     <div className="overlooked-slider__item overlooked-slider__item-5">
//       <a href="product-card-desktop.html"></a>
//     </div>
//     <div className="overlooked-slider__arrow overlooked-slider__arrow_right arrow"></div>
//   </div>
// </section>
