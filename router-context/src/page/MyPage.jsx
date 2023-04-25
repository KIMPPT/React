import React from "react";
import { useContext } from "react";
import DataContext from "../context/DataContext";
import { Link } from "react-router-dom";
export default function MyPage() {
  let { state, action } = useContext(DataContext);

  //좋아요 삭제
  //1. 삭제할 id를 찾는다
  //2. 삭제할 id를 제외하고 새로운 배열을 만든다=filter
  //3. 새로운 배열을 set-메소드를 이용하여 넣는다
  let deleteLike = (id) => {
    let newLikelist = state.likelist.filter((like) => like.boardId !== id);
    action.setLikelist(newLikelist);
  };
  return (
    <div>
      <h3>MyPage</h3>
      <div>
        <img src="" alt="프로필 사진" />
        <button>프로필 수정</button>
      </div>
      <h5>green님의 페이지</h5>
      <hr />
      <h5>좋아요 리스트</h5>
      <ul>
        <li>게시글 제목</li>
        {state.likelist.map((like) => (
          <li key={like.boardid}>
            <Link to={`/boardlist/${like.boardId}`}>{like.title}</Link>
            <button
              onClick={() => {
                deleteLike(like.boardId);
              }}
            >
              삭제
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
