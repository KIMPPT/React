import React from "react";
//context의 값을 사용하고자 하는 공간에 작성한 ThemeContext 가져옴
import Themecontext from "../context/Themecontext";
import Datacontext from "../context/Datacontext";
import Objectcontext from "../context/Objectcontext";

import { useContext } from "react";
export default function Toolbar(props) {
  return (
    <div>
      <ThemedButton />
      <MyButton />
    </div>
  );
}
//클래스형 컴포넌트로 전달
class ThemedButton extends React.Component {
  //클래스형 컴포넌트에서 context값을 사용하기 위해서는
  //contextType에 import해온 ThemeContext를 가져와서 쓸 수 있다.
  //value 로 번달한 문자열이 들어가 있다=light
  static contextType = Themecontext;
  render() {
    //호출 할 때는 this.context를 통해서 호출
    return <button>클래스형에서 Context:{this.context}</button>;
  }
}
//함수형 컴포넌트로 전달
function MyButton() {
  //함수형 컴포넌트에서 Themecontext를 통해서 갑 ㅅ받아오기
  //useContext를 통해서 값을 받아 올 수 있다.
  //useContext로 받아올 변수의 이름을 자율
  //ThemeContext에서 작성한 value 문자열 : light
  let context = useContext(Themecontext);

  //객체로 전달된 값은 객체로 사용
  let user = useContext(Objectcontext);
  return (
    <div>
      <h3>{context}</h3>
      {user && <button>{user.name}의 버튼입니다</button>}
    </div>
  );
}
