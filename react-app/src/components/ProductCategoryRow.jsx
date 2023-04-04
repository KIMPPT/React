import React, { Component } from "react";
//json에서 카테고리를 뽑아내옴. 중복이 있으면 하나만
export class ProductCategoryRow extends Component {
    constructor(props){
        super(props);
    }
  render() {
    let {category}=this.props;
    return (
      <tr>
        <th colSpan={2}>{category}</th>
      </tr>
    );
  }
}

export default ProductCategoryRow;
