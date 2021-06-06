import React, { Component } from "react";

class CartDetailsRows extends Component {
  handleChange = (product, e) => {
    this.props.updateQuantity(product, e.target.value);
  };

  render() {
    if (!this.props.cart || this.props.cart.length === 0) {
      return (
        <tr>
          <td colSpan="5">Your cart is empty</td>
        </tr>
      );
    } else {
      return (
        <>
          {this.props.cart.map((i) => (
            <tr key={i.product.id}>
              <td>
                <input
                  type="number"
                  value={i.quantity}
                  onChange={(ev) => this.handleChange(i.product, ev)}
                />
              </td>
              <td>{i.product.name}</td>
              <td>${i.product.price.toFixed(2)}</td>
              <td>${(i.quantity * i.product.price).toFixed(2)}</td>
              <td>
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => this.props.removeFromCart(i.product)}
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
          <tr>
            <th colSpan="3" className="text-right">
              Total:
            </th>
            <th colSpan="2">${this.props.cartPrice.toFixed(2)}</th>
          </tr>
        </>
      );
    }
  }
}

export default CartDetailsRows;
