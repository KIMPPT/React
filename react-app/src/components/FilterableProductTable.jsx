import React, { Component } from 'react'
import SearchBar from './SearchBar'
import ProductTable from './ProductTable'
import productData from '../data/product.json'
//1. 하향식으로 작성(부모부터 작성)
//2. 정적 데이터를 이용해서 작성
//3. state와 props 구분해서 작성
export class FilterableProductTable extends Component {
  render() {
    console.log(productData);
    return (
      <div>
        {/*검색어, 체크박스에 관한 값 */}
        <SearchBar/>
        {/*가져온 데이터 값을 보여줄 공간 */}
        <ProductTable products={productData}/>
      </div>
    )
  }
}

export default FilterableProductTable