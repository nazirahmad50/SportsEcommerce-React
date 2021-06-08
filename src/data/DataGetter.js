import React, { Component } from "react";
import { DataTypes } from "./Types";

class DataGetter extends Component {
  componentDidMount = () => this.getData();
  componentDidUpdate = () => this.getData();

  getData = () => {
    const dsData = this.props.products_params || {};
    const rsData = {
      _limit: this.props.pageSize || 5,
      _sort: this.props.sortkey || "name",
      _page: this.props.match.params.page || 1,
      category_like:
        (this.props.match.params.category || "") === "all"
          ? ""
          : this.props.match.params.category,
    };

    if (Object.keys(rsData).find((k) => dsData[k] !== rsData[k])) {
      this.props.loadData(DataTypes.PRODUCTS, rsData);
    }
  };

  render() {
    return <>{this.props.children}</>;
  }
}

export default DataGetter;
