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

  //프로필 사진 바꾸는 메서드 >>모달창 사용하는 방식
  let changeProfile = () => {
    //1. 사진을 선택하는 창 출력(파일 입력)
    //2. 그 사진을 선택하면 프뢸 사진이 바뀜(set-메소드를 이용하여 user.profile 값 수정)
  };
  //input 태그 안에 있는 file의 값을 가져오는 메서드
  //input 태그 안에 있는 값을 가져오기 위해 e(이벤트 객체) 사용
  let onLoadFile = (e) => {
    //이벤트 객체의 파일 배열 중 0번째 인덱스 값 사용
    console.dir(e.target);
    console.log(e.target.files[0]);
    //URL.createObjectURL()를 이용하여 파일의 값 변형해서 사용
    //나중에 DB에서도 저장해서 사용 가능

    //user.profile에 넣어서 사용
    action.setUser({
      ...state.user,
      profile: URL.createObjectURL(e.target.files[0]),
    });
  };
  return (
    <div>
      <h3>MyPage</h3>
      <div>
        <img
          src={state.user.profile}
          alt="프로필 사진"
          style={{ borderRadius: "50%" }}
        />
        <button onClick={changeProfile}>프로필 수정</button>
        {/*onChnage를 이용하여 들고오는 사진이 바뀔 때 마다 실행 
        실행하면서 input의 값을 가져오기 위함
        input type="text"에서 값을 들고온 것과 유사*/}
        <input type="file" onChange={onLoadFile} />
      </div>
      <h5>{state.user.writer}님의 페이지</h5>
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

      {/*모달 창을 사용하기 위한 공간 */}
    </div>
  );
}
