import React, { Component } from "react";
import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";

export class ProductTable extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let { products } = this.props;
    // products배열에 있는 객체 중 Sporting Goods 값을 가진 객체 배열
    let sportingProducts = products.filter(
      (product) => product.category === "Sporting Goods"
    );
    // electronics 값을 가진 객체 배열
    let elecProducts = products.filter(
      (product) => product.category === "Electronics"
    );
    return (
      <div>
        <table>
          <tbody>
            <tr>
              <th>Name</th>
              <th>Price</th>
            </tr>
            {
              //products의 카테고리 중 'sporting goods'를 가진 배열을 만드는 방법
              //filter를 이용해 내용을 작성하고 <productrow/>를 통해서 내용 출력하기
            }
            <ProductCategoryRow />
            <ProductRow name={products[0].name} price={products[0].price} />
            <hr />
            {products.map((product) => (
              <ProductRow name={product.name} price={product.price} />
            ))}
            <hr />
            {sportingProducts.map((product) => (
              <ProductRow name={product.name} price={product.price} />
            ))}
            <hr />
            {elecProducts.map((product) => (
              <ProductRow name={product.name} price={product.price} />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ProductTable;
