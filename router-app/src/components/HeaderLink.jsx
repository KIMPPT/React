import React from "react";
//링크들을 모아서 헤더에 고정하기
import { Link } from "react-router-dom";
export default function HeaderLink() {
    let fruit = "apple";
  return (
    <div>
      <Link to="/about">|About|</Link>
      {/*to 에 {}인 JS 형식도 가능 */}
      <Link to={`/st/${fruit}`}>|st/apple 로 이동|</Link>
      <Link to={`/articles`}>|Articles|</Link>
      <Link to={`/story2`}>|스토리2List로 이동|</Link>
      <Link to={`/navigate`}>|네비게이트로 이동|</Link>
    </div>
  );
}
