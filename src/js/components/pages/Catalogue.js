import React, {Component} from 'react';
import ProductsList from '../internal/ProductsList';
import PagePagination from '../common/PagePagination';
import FilterSidebar from '../filter/FilterSidebar';
import RecentlyViewed from '../internal/RecentlyViewed';
import SortBy from '../internal/SortBy';

class Catalogue extends Component {
  render() {
    return (
      <div>
        <div className="site-path">
          <ul className="site-path__items">
            <li className="site-path__item"><a href="/">Главная</a></li>
            <li className="site-path__item"><a href="#">Женская обувь</a></li>
          </ul>
        </div>
        <main className="product-catalogue">
          <FilterSidebar/>
          <section className="product-catalogue-content">
            <section className="product-catalogue__head">
              <div className="product-catalogue__section-title">
                <h2 className="section-name">Женская обувь</h2>
                <span className="amount"> 1 764 товара</span>
              </div>
              <SortBy/>
            </section>

            <ProductsList/>

            <PagePagination/>
          </section>
        </main>
        <RecentlyViewed/>
      </div>
    );
  }
}

export default Catalogue;
