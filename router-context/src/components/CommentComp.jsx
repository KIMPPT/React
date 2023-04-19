import React from 'react'

//삭제 버튼에 쓸 메서드를 Board에서 작성 후 전달해서 사용
// >>state와 action의 필요한 공간에서 쓰기 위함
export default function CommentComp(props) {
  //props로 전달한 comment를 구조분해를 통해서 쓰기 쉽게 작성
  let {writer,text,date,cid}=props.comment;
  let {deleteComment}=props;
  return (
    <div>
      <h5>{cid}/{writer}</h5>
      <p>{text}</p>
      <span>{date}</span>
      <button
      onClick={()=>{deleteComment(cid)}}>X</button>
    </div>
  )
}
