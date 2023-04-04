import React, { Component } from "react";

//글자를 입력 받아서 필터링 하는 컴포넌트
export class SearchBar extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    //상위 FilterableProductTable에서 만들고 search바에 추가한 isOnlyStock,toggleStock 메서드를 불러온다
    let { isOnlyStock, toggleStock } = this.props;
    return (
      <div>
        <input
          type="text"
          placeholder="Search..." //입력되기 전까지 출력될 문장
          defaultChecked={isOnlyStock} //기본체크값을 inOnltStock의 bull값으로 받는다
        />
        <br />
        {/* checkbox/radio의 값을 가져 올 때 readOnly를 이용해서 바뀌는 값을 출력하는 용도로 사용 할 수 있다*/}
        <input type="checkbox"
        checked={isOnlyStock} 
        readOnly
        onClick={toggleStock} //클릭할때마다 toggleStock 실행. 상위 컴포넌트에서 T/F 가 변환한다고 이미 설정되어 있음
        />
        <label htmlFor="">Only show products in stock</label>
      </div>
    );
  }
}

export default SearchBar;
