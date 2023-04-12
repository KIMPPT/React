import React from "react";
import "../css/headerlink.css";
//링크들을 모아서 헤더에 고정하기
import { Link, NavLink } from "react-router-dom";
export default function HeaderLink() {
  let fruit = "apple";
  return (
    <div>
      <NavLink
        className={({ isActive }) => (isActive ? "link-style" : undefined)}
        to="/about"
      >
        |About|
      </NavLink>
      {/*to 에 {}인 JS 형식도 가능 */}
      <NavLink
        className={({ isActive }) => (isActive ? "link-style" : undefined)}
        to={`/st/${fruit}`}
      >
        |st/apple 로 이동|
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "link-style" : undefined)}
        to={`/articles`}
      >
        |Articles|
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "link-style" : undefined)}
        to={`/story2`}
      >
        |스토리2List로 이동|
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "link-style" : undefined)}
        to={`/navigate`} end //주소가 완전히 일치 할 때만 class이름 추가
      >
        |네비게이트로 이동|
      </NavLink>
    </div>
  );
}
