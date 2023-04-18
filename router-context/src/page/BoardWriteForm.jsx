import React from "react";
import { useState, useContext } from "react";
import DataContext from "../context/DataContext";
import { useNavigate } from "react-router-dom";
//콘솔에서 react developer tools로 hook에 값이 들어오나 확인[onchange 함수 적용 유무]
export default function BoardWriteForm() {
  let navigate = useNavigate();
  let [title, setTitle] = useState("");
  let [content, setContent] = useState("");

  //context에서 작성한 value의 state의 boardlist의 값을 추가
  //value의 action의 setBoardlist에 접근해서 작성한 새로운 값 추가
  // >>todolist에서 값을 추가 할 때, 이전의 배열을 들고와서 뒤에 concat을 통해
  //새로운 배열을 만들어 추가
  // 위와 같이 데이터를 쓰는 이유 : 서버의 DB를 사용하지 않고 JS로 값을 저장하고 있기 때문
    let date=new Date();
  //DataContext를 통해서 공용데이터 값, 메서드 들고오기
  let value = useContext(DataContext);
  let { state, action } = value;
  //글 추가 메서드(함수)
  let addBoard = () => {
    //1. 어떤 형태로 값을 저장할지
    let newBoard = {
      id: state.id,
      title: title,
      content: content,
      date: `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`,
      //DataContext에 들어가있는 user의 writer값
      //로그인을 했다면 작성한 writer, 로그인을 안했다면 "익명"
      writer: state.user.writer,
    };
    //1-1. id값을 1 추가
    action.setId(state.id+1);
    //2. 배열에 추가한 새로운 배열을 만들어서-concat
    let newBoardlist = state.boardlist.concat(newBoard);
    //3. set메서드를 통해 추가
    action.setBoardlist(newBoardlist);
    //내용이 추가된 후 그 내용을 확인하기 위해 BaordList로 이동
    navigate('/boardlist');
  };

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
      <br />
      <textarea
        name=""
        id=""
        cols="30"
        rows="10"
        onChange={(e) => {
          setContent(e.target.value);
        }}
      ></textarea>
      <br />
      <button onClick={addBoard}>글 작성 완료</button>
    </div>
  );
}
