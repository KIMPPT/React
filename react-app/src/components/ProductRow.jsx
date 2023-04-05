import React, { Component } from "react";

//json에서 name,price를 들고오고 stocked의 값에 따라 표현 다르게
export class ProductRow extends Component {
    constructor(props){
        super(props);
    }
  render() {
    //해당 컴포넌트의 상위인 ProductTable에서 불러낸다
    let {name,price}=this.props
    return (
      <tr>
        <td>{name}</td>
        <td>{price}</td>
      </tr>
    );
  }
}

export default ProductRow;
