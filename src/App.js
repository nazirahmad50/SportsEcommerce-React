import "./App.css";
import { Provider } from "react-redux";
import {
  Redirect,
  Route,
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";
import { ShopConnector } from "./shop/ShopConnector";
import { SportsEcommerceDataStore } from "./data/DataStore";
import { Component } from "react";

export default class App extends Component {
  render() {
    return (
      <Provider store={SportsEcommerceDataStore}>
        <Router>
          <Switch>
            <Route path="/shop" component={ShopConnector} />
            <Redirect to="/shop" />
          </Switch>
        </Router>
      </Provider>
    );
  }
}
