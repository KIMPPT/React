import React, { Component } from "react";
import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";

export class ProductTable extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let { products } = this.props;
    // products배열에 있는 객체 중 Sporting Goods 값을 가진 객체 배열 생성
    let sportingProducts = products.filter(
      (product) => product.category === "Sporting Goods"
    );
    // electronics 값을 가진 객체 배열 생성
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
            {/*임시로 json에서 0번째 인덱스(첫번째 배열) 의 이름과 가격 값을 불러오기*/}
            <ProductRow name={products[0].name} price={products[0].price} />
            {/*
            products는 상위인 FilterableProductTable.jsx에서 <ProductTable/>에 있는 product props를 불러낸 것이다
            이 배열에서 name값을 ProductRow의 name에 넣고 price 값을 하위 price에 넣는 과정이다
            */}
            {products.map((product) => (
              <ProductRow name={product.name} price={product.price} />
            ))}
            {/*
            위에서 sportingProducts 까지는 생성된 배열에서 새로운 배열로 생성해줬고
            해당 새로운 배열이 ProductRow.jsp에 적혀 있는 name과 price를 출력하는데
            그 name의 값을 sportingProducts 배열에 있는 name 값을 불러낸다.
            이 과정은 메서드의 배열이 끝날때까지 반복한다. category라는 props를 생성해서 해당 컴포넌트에 값 전달
            */}
            <ProductCategoryRow category={"Sporting Goods"} />
            {sportingProducts.map((product, index) => (
              <ProductRow
                key={index}
                name={product.name}
                price={product.price}
              />
            ))}
            <ProductCategoryRow category={"Electronics"} />
            {elecProducts.map((product, index) => (
              <ProductRow
                key={index}
                name={product.name}
                price={product.price}
              />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ProductTable;
