import React, { Component } from "react";

//글자를 입력 받아서 필터링 하는 컴포넌트
export class SearchBar extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let { isOnlyStock, toggleStock } = this.props;
    return (
      <div>
        <input
          type="text"
          placeholder="Search..."
          defaultChecked={isOnlyStock}
        />
        <br />
        {/* checkbox/radio의 값을 가져 올 때 readOnly를 이용해서 바뀌는 값을 출력하는 용도로 사용 할 수 있다*/}
        <input type="checkbox"
        checked={isOnlyStock}
        readOnly
        onClick={toggleStock} />
        <label htmlFor="">Only show products in stock</label>
      </div>
    );
  }
}

export default SearchBar;
