import React, { Component } from "react";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";
import productData from "../data/product.json";
//1. 하향식으로 작성(부모부터 작성)
//2. 정적 데이터를 이용해서 작성
//3. state와 props 구분해서 작성
export class FilterableProductTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: "",
      isOnlyStock: false,
    };
  }
  //toggleStock 메소드를 실행할때마다 this.state.isOnlyStock T/F 로 바꿈
  toggleStock = () => {
    this.setState({ isOnlyStock: !this.state.isOnlyStock });
    console.log("메소드실행");
  };
  render() {
    console.log(productData);
    //isOnlyStock이 true일 때 productData가 stock이 true인것만 배열로 만들기-새로운 배열
    let checkedProduct = productData.filter((product) => product.stocked);
    return (
      <div>
        {/*검색어, 체크박스에 관한 값 */}
        <SearchBar
          isOnlyStock={this.state.isOnlyStock}
          //props 값으로 메소드를 작성해서 전달
          toggleStock={this.toggleStock}
        />
        {/*가져온 데이터 값을 보여줄 공간 */}
        <ProductTable //product에 체크박스에 체크가 되어 있다면 true값만 있던 새로운 배열을 내보니고, 아닐 경우 기존 배열을 내보낸다.
          products={this.state.isOnlyStock ? checkedProduct : productData}
        />
      </div>
    );
  }
}

export default FilterableProductTable;
