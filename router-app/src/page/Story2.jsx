import React from "react";

// URL 파라미터 값 가져오는 함수
//useParams : 파라미터의 줄임말
import { useParams } from "react-router-dom";
export default function Story2() {
  //URL 파라미터로 전달된 값을 useParams()를 이용하여 가져 올 수 있다.
  //주소의 위치에 맞게 전달해야함
  //App.js에서 path='/st/:value'라고 했는데 value가 아닌 name으로 접근한다면 접근 할 수 없음
  //주소로 값을 전달 할 때 /st/apple 이면 value=apple이 된다.
  let params=useParams();
  let {name}=useParams();//객체,구조화할당해야 들고 올 수 있다
  // params는 객체값을 들고온 것이고 value는 params 의 value에 해당하는 값만 들고온 것이다.

  return (
    <div>
      <h1>{params.name} + Story2</h1>
      <p>{name} + http://localhost:3000/story2 입니다</p>
    </div>
  );
}
