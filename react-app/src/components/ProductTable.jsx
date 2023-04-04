import React, { Component } from "react";
import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";

export class ProductTable extends Component {
  render() {
    return (
      <div>
        <table>
          <tbody>
            <tr>
              <th>Name</th>
              <th>Price</th>
            </tr>
            <ProductCategoryRow />
            <ProductRow />
            <ProductRow />
            <ProductRow />
            <ProductCategoryRow />
            <ProductRow />
            <ProductRow />
            <ProductRow />
          </tbody>
        </table>
      </div>
    );
  }
}

export default ProductTable;
