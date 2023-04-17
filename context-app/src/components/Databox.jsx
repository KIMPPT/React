import React from "react";
import { useContext } from "react";
import Datacontext from "../context/Datacontext";
import { useState } from "react";
export default function Databox() {
  return (
    <div>
      <DataText></DataText>
    </div>
  );
}

function DataText() {
  //useContext와 작성한Context를 가져와서 사용
  let value = useContext(Datacontext);
  console.log(value);
  //input 태그의 값 받아와서 input에 저장
  //버튼을 눌렸을 때 context에 있는 이름이 바뀌게 작성
  let [input, setInput] = useState("");

  //value값이 null 또는 값
  //null 일 때는 false이므로 값을 출력하지 않게 하고 값이 있을 때는 true 이므로 그 값 출력
  return (
    <div>
      {<h3>{value && value.state.name}</h3>}
      <input
        type="text"
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <button
        onClick={() => {
          value.action.setName(input);
        }}
      >
        버튼을 누르면 name 수정
      </button>
    </div>
  );
}
