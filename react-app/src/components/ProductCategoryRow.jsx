import React, { Component } from "react";
import category from '../data/product.json'
//json에서 카테고리를 뽑아내옴. 중복이 있으면 하나만
export class ProductCategoryRow extends Component {
  render() {
    return (
      <tr>
        <th colSpan={2}>Sport Goods</th>
        <p>{category[2].category}</p>
      </tr>
    );
  }
}

export default ProductCategoryRow;
