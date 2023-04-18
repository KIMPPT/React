import React from "react";
import { useState, useContext } from "react";
import DataContext from "../context/DataContext";
import { useNavigate, useLocation } from "react-router-dom";
//콘솔에서 react developer tools로 hook에 값이 들어오나 확인[onchange 함수 적용 유무]
//BoardModifyForm 컴포넌트는 Board컴포넌트에서 수정 버튼을 클릭했을 때
//1)id값을 가져와서 boardlist의 객체값을 수정해서 작성하는 공간
//2)객체를 가져와서 boardlist의 객체값을 수정해서 작성하는 공간
//아래 내용은 객체를 가져와서 진행
//객체를 가져올 때는 주소(params)를 이용 할 수 없다.
//useNavigate에서 state를 통해 값 전달
//>useLocation을 통해서 값을 받아 올 수 있다.
//1),2) 모두 수정해서 쓰는 부분은 동일
export default function BoardModifyForm() {
  let navigate = useNavigate();

  let location = useLocation();
  //console.log(location) 로 해당글의 객체값들을 받아온다.
  
  //수정버튼을 누른 Board에서 받아온 객체
  //{id,title,content,date,writer}
  let boardData = location.state;
  //밑의 state와 겹치기 때문에 다른 이름으로 지정

  //사용자로 입력 받아올 공간을 useState로 작성
  //> todolist에서 todo를 작성할 공간과 동일
  //useState에 boardData.를 넣어서 초기값 접근
  let [title, setTitle] = useState(boardData.title);
  let [content, setContent] = useState(boardData.content);
  let date = new Date();
  //DataContext를 통해서 공용데이터 값, 메서드 들고오기
  let value = useContext(DataContext);
  let { state, action } = value;

  //글 수정 메서드(함수)
  let modifyBoard = () => {
    //1. 수정된 객체 작성
    //가져온 boardData와 수정한 title,content 사용
    //boardData의 모든 속성값을 가져오기 위해 ...(스프레드연산자) 사용
    let newBoard = {
      ...boardData,
      title,
      content,
    };
    //2. 배열을 들고와서 동일한 id에 객체를 바꾸어서 새로운 배열 생성
    //동일하지 않다면 이전 배열의 객체값 그대로 사용
    //map 사용
    let newBoardlist = state.boardlist.map((board) =>
      board.id === boardData.id ? newBoard : board
    );
    //3. 새로운 배열을 set 메서드를 이용하여 추가
    action.setBoardlist(newBoardlist);
    //수정한 Baord로 이동해서 내용 확인
    navigate(`/boardlist/${newBoard.id}`)
  };

  return (
    <div>
      <h3>Baord-Modify-Form</h3>
      <label htmlFor="">제목 : </label>
      <input
        type="text"
        name=""
        id=""
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        //현재 수정할 객체의 title값
        value={title}
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
        //현재 수정할 객체의 content값
        value={content}
      ></textarea>
      <br />
      <button onClick={modifyBoard}>글 수정 완료</button>
    </div>
  );
}
