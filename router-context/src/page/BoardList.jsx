import React from "react";
import data from "../data/dummy.json";

import { useState, useContext } from "react";
import DataContext from "../context/DataContext";
import { Link } from "react-router-dom";

// json을 이용한 데이터를 들고와서
// 목록 출력
export default function BoardList() {
  //const [dataList, setDataList] = useState(data);
  //DataContext에서 값을 가져와서 사용하기
  //{state:{boardlist},action:{setBoardlist}}
  let value = useContext(DataContext);
  //좋아요 버튼 메소드
  //1. 클릭했을 때, 값이 추가 : 객체 생성 후(concat)
  //2. 클릭했을 때, 값 제거
  //>값이 없일때는 추가, 값이 있을때는 제거
  //find를 사용해서 값이 있을 때는 객체 return, 값이 없을때는 undefined return
  let likeClick = (board) => {
    //값이 있으면 삭제
    if (value.state.likelist.find((like) => (like.boardId === board.id))) {
      //filter를 통해서 삭제 : id가 같다면 제외하고 배열 생성
      let newLikelist = value.state.likelist.filter(
        (like) => (like.boardId !== board.id)
      );
      value.action.setLikelist(newLikelist);
    } else {
      //값이 없으면 추가
      //클릭했을 때 값 추가>>매개변수로 받아오기
      let newlike = {
        boardId: board.id,
        title: board.title,
      };
      let newLikelist = value.state.likelist.concat(newlike);
      value.action.setLikelist(newLikelist);
    }
  };
  return (
    <div>
      <h3>BoardList</h3>
      <ul>
        {
          //dataList 대신 DataContext에 넣은 내용을 씀
          //좋아요 기능을 사용하기 위해서 좋아요 배열에 있는 boardId와
          //boardList에 있는 id와 비교하여서 그 값이 있다면
          //화면에 출력
          //어떤 배열 메소드를 사용해서 비교할지 결정:find
          //map 으로 board값이 하나씩 반복되고 있고
          //하나씩 가져오는 board 값에서 좋아요 배열로 비교
          value.state.boardlist.map((data) => (
            <li key={data.id}>
              {/*find를 이용해서 data{board}와 likelist 비교 
                            값이 있다면 색 있는 하트{객체 return}
                            값이 없다면 색 없는 하트
                            :삼항연산자
                        */}
              <span
                onClick={() => {
                  likeClick(data);
                }}
              >
                {
                //삼항연산자와 && 연산자 사용(참일 때 화면 출력)
                //로그인이 되어 있으면 화면에 출력(&&)-비교/논리 연산자 X
                value.state.user.login &&
                //find()의 값을 통해 하트 색 결정
                (value.state.likelist.find(
                  (like) => like.boardId === data.id
                ) ? (
                  <span>❤</span>
                ) : (
                  <span>🤍</span>
                ))}
              </span>
              <Link to={`/boardlist/${data.id}`}>{data.title}</Link>
            </li>
          ))
        }
      </ul>
    </div>
  );
}
