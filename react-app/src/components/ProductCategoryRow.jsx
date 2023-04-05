import React, { Component } from "react";
//json에서 카테고리를 뽑아내옴. 중복이 있으면 하나만
export class ProductCategoryRow extends Component {
    constructor(props){
        super(props);
    }
  render() {
    let {category}=this.props; //상위 컴포넌트에서 category={""}라는 값을 만들어 놓았기 때문에 들고 옴
    return (
      <tr>
        <th colSpan={2}
        //열 병합
        >{category}</th>
      </tr>
    );
  }
}

export default ProductCategoryRow;
