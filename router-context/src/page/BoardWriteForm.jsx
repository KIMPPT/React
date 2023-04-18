import React from "react";
import { useState } from "react";
//콘솔에서 react developer tools로 hook에 값이 들어오나 확인[onchange 함수 적용 유무]
export default function BoardWriteForm() {
  let [title, setTitle] = useState("");
  let [context, setContext] = useState("");

  //context에서 작성한 value의 state의 boardlist의 값을 추가
  //value의 action의 setBoardlist에 접근해서 작성한 새로운 값 추가
  // >>todolist에서 값을 추가 할 때, 이전의 배열을 들고와서 뒤에 concat을 통해
  //새로운 배열을 만들어 추가
  // 위와 같이 데이터를 쓰는 이유 : 서버의 DB를 사용하지 않고 JS로 값을 저장하고 있기 때문

  //글 추가 메서드(함수)
  let addBoard = () => {};
  return (
    <div>
      <h3>Baord-Write-Form</h3>
      <label htmlFor="">제목 : </label>
      <input
        type="text"
        name=""
        id=""
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <br/>
      <textarea
        name=""
        id=""
        cols="30"
        rows="10"
        onChange={(e) => {
          setContext(e.target.value);
        }}
      ></textarea>
      <br />
      <button onClick={addBoard}>글 작성 완료</button>
    </div>
  );
}
