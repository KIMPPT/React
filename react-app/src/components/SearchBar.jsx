import React, { Component } from "react";

//글자를 입력 받아서 필터링 하는 컴포넌트
export class SearchBar extends Component {
  render() {
    return (
      <div>
        <input type="text"></input>
        <br />
        <input type="checkbox"></input>
        <label>Only show products in stock</label>
      </div>
    );
  }
}

export default SearchBar;
