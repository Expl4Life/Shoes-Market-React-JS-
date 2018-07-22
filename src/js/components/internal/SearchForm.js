import React, {Component} from 'react';

class SearchForm extends Component {
  render() {
    return (
      <form className="header-main__search" action="#">
        <input placeholder="Поиск"/>
        <i className="fa fa-search" aria-hidden="true"></i>
      </form>
    );
  }
}

export default SearchForm;

