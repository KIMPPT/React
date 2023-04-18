import React, { useEffect,useContext } from 'react'
import { useParams, useNavigate} from 'react-router-dom'

import data from '../data/dummy.json'
import DataContext from '../context/DataContext';
// id로 구분하기위해 board에 data의 내용이 필요함
export default function Board() {
  let {state,action}=useContext(DataContext);
  //바로 boardlist를 못들고 온다. 
  //boardlist.jsx에서 value.state.boardlist처럼 2번 들어가야 한다.
  let {boardlist}=state;
  console.log(state);

  // useNavigate를 사용하면 함수를 이용해서 화면이동가능
  const navigate = useNavigate();

  const {id} = useParams();
  // 배열의 함수인 find 를 이용하여
  // 함수의 조건이 참인 하나의 값을 가져온다 
  // find로 가져온값은 배열 안에 있는 하나의 값
  // find로 값을 찾지 못할 경우 undefined 출력
  // undefined의 값에 속성을 찾으려고하면 >> 오류!
  const boardData = boardlist.find((d)=>(d.id == id))
  //data 대신 value.state.boardlist로 접근

  // useEffect를 사용해서 boardData값이 undefind면 
  // 오류 페이지 컴포넌트로 이동 혹은 목록으로 이동
  // 두번째 인자값이 빈 배열이라면 컴포넌트 생성시에 실행
  useEffect(()=>{
    if (boardData == undefined) {
        navigate('/boardlist');
    }
  },[])
  let deleteBoard=()=>{
    //1. 현재 id를 들고온다>useParam을 통해 가져온 id를 들고온다

    //2. id와 동일한 객체를 제외한 새로운 배열을 만든다
    //filter를 통해 배열 생성
    let newBoardlist=boardlist.filter((board)=>(board.id!==Number(id)))
    //3. 새로운 배열을 set메서드를 통해 넣어준다
    action.setBoardlist(newBoardlist);
    //삭제한 후에는 상위인 boardlist로 이동해야함
    navigate('/boardlist');
  }
  return (
    <div>
        {   // 화면이 먼저 화면에 렌더되고, useEffect 실행
            // 화면 상에서 나타나는 오류를 제거하고
            // useEffect로 이동
            // boardData = undefined == false
            // boardData = 값있음 == true
            // >> 자동 형변환
            boardData && (
                <div>
                    <h3>제목: {boardData.title}</h3>
                    <p>작성자: {boardData.writer}</p>
                    <p>내용 : {boardData.content}</p>
                    <p>날짜: {boardData.date}</p>
                </div>
            )
        }
    <button
    onClick={deleteBoard}>삭제</button>
    </div>
  )
}
