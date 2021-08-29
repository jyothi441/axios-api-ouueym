import React, { Component } from 'react';
import store from '../store';

const styles = {
  products: {
    display: 'flex',
    alignItems: 'stretch',
    flexWrap: 'wrap'
  },
  product: {
    width: '220px',
    marginLeft: 10,
    marginRight: 10
  }
};

export default class ProductList extends Component {
  render() {
    return (
      <div style={styles.products}>
        {this.props.products.map(product => (
          <div
            className="thumbnail"
            style={styles.product}
            key={product.uniq_id}
          >
            <div className="caption">
              <h4>{product.product_name}</h4>
              <p>
                <p>Retails Price: ${product.retail_price}</p>
                <p>Discounted Price: ${product.discounted_price}</p>
              </p>
              <img src={product.image[0]} alt={'image'} />
            </div>
          </div>
        ))}
      </div>
    );
  }
}

/***************************************************************** */
