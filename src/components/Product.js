import React, { Component } from 'react';
class Product extends Component {
  render() {
    var { match } = this.props;
    console.log(match);

    var name = match.params.name;
    return <h1>Day la chi tiet san pham : {name}</h1>;
  }
}

export default Product;
