import React from "react";
import { useState } from "react";
let DataContext = React.createContext("");
//컴포넌트 밖에서 생성한 값의 경우 자동으로 값이 바뀌지 않기에 안에서 메소드를 작성
let cid=3;
let DataProvider = ({ children }) => {
  //데이터를 저장 및 수정하기 위해 useState 사용
  //DataContext에 들어갈 value값의 특징
  //1. 2개 이상의 페이지 컴포넌트에서 사용 할 때
  // 페이지 컴포넌트 - path로 연결된 컴포넌트
  let [boardlist, setBoardlist] = useState([
    {
      id: 1,
      title: "첫번째 게시물입니다",
      content: "내용을 작성하였습니다",
      date: "2023-04-14",
      writer: "green",
    },
    {
      id: 2,
      title: "두번째 게시물입니다",
      content: "내용을 작성하였습니다",
      date: "2023-04-15",
      writer: "green",
    },
    {
      id: 3,
      title: "세번째 게시물입니다",
      content: "내용을 작성하였습니다",
      date: "2023-04-17",
      writer: "blue",
    },
  ]);

  //id 값을 전달하기 위해 useState()로 작성
  let [id, setId] = useState(4);

  //user 값을 사용하기 위해 useState() 작성
  let [user, setUser] = useState({ writer: "익명", login: false });

  //commentlist 값 저장
  //id,text,date,writer
  let [commentlist,setCommentlist]=useState(
    [
      {
        cid:1,
        boardId:1,
        text:"첫번째 게시글의 코멘트입니다",
        date:"2023-04-19",
        writer:"green",
      },
      
      {
        cid:2,
        boardId:3,
        text:"세번째 게시글의 코멘트입니다",
        date:"2023-04-19",
        writer:"green",
      }
    ]
  );
  //좋아요 배열은 user와 연결해서 사용>>지금은 연결하지 않고 진행
    // 좋아요 배열을 사용하기 위한 useState
    //좋아요 표시를 목록에서 먼저 표시
    //게시글 안에서 표시(나중에)
    let [likelist,setLikelist]=useState(
      [
        {
          boardId:1,
          title:"첫번째 게시물입니다"
        }
      ]
    )
    //cid를 사용하기 위한 메서드 (호출하면 1씩 증가)
    let cidCount=()=>{
      cid++;
    }

  //value에 담을 데이터 정리
  let value = {
    state: { boardlist, id, user,commentlist ,cid,likelist}, //접근할 수 있는 값
    action: { setBoardlist, setId, setUser,setCommentlist,cidCount,setLikelist }, //수정하기 위한 함수
  };
  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};
//값을 전달하기 위해 감싸는 컴포넌트
export { DataProvider };
//값을 사용하기 위해 호출하는 컴포넌트
export default DataContext;
