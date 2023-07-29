/* eslint-disable react/prop-types */
import { Component } from 'react';

class ProductClass extends Component {
  render() {
    const { name, price, quantity } = this.props;

    return (
      <div>
        <h3>Product: {name}</h3>
        <p>Price: ${price}</p>
        <p>Quantity: {quantity}</p>
      </div>
    );
  }
}

export default ProductClass;
