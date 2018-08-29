import React ,{ Component } from 'react';
import './catalog-page.scss';

export class CatalogPage extends Component {

  constructor(props) {
    super(props)

    this.state = {
      active: false
    }
  }

  render() {
    return (
      <div className="catalog-page">
        Catalog content
      </div>
    );
  }
}

