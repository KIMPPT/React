import React, { Component } from 'react'
import SearchBar from './SearchBar'
import ProductTable from './ProductTable'
//1. 하향식으로 작성(부모부터 작성)
//2. 정적 데이터를 이용해서 작성
//3. state와 props 구분해서 작성
export class FilterableProductTable extends Component {
  render() {
    return (
      <div>
        <SearchBar/>
        <ProductTable/>
      </div>
    )
  }
}

export default FilterableProductTable