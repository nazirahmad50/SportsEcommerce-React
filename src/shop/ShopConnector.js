import { Component } from "react";
import { connect } from "react-redux";
import { Redirect, Route, Switch } from "react-router-dom";
import { DataTypes } from "../data/Types";
import { Shop } from "./Shop";
import {
  loadData,
  addToCart,
  updateCartQuantity,
  removeFromCart,
  clearCart,
} from "../data/ActionCreators";

const mapStateToProps = (dataStore) => ({
  ...dataStore,
});

const mapDispatchToProps = {
  loadData,
  addToCart,
  updateCartQuantity,
  removeFromCart,
  clearCart,
};

const filterProducts = (products = [], category) =>
  !category || category === "All"
    ? products
    : products.filter(
        (p) => p.category.toLowerCase() === category.toLowerCase()
      );

export const ShopConnector = connect(
  mapStateToProps,
  mapDispatchToProps
)(
  class extends Component {
    render() {
      return (
        <Switch>
          <Route
            path="/shop/products/:category?"
            render={(routeProps) => (
              <Shop
                {...this.props}
                {...routeProps}
                products={filterProducts(
                  this.props.products,
                  routeProps.match.params.category
                )}
              />
            )}
          />
          <Redirect to="/shop/products" />
        </Switch>
      );
    }

    componentDidMount() {
      this.props.loadData(DataTypes.CATEGORIES);
      this.props.loadData(DataTypes.PRODUCTS);
    }
  }
);
