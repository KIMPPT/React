import React from "react";
import { Link, Outlet } from "react-router-dom";
//배열 리스트를 이용하여 화면 출력
export default function Story2List() {
  let fruits = ["apple", "orange", "pear"];
  return (
    <div>
      <h3>Story2의 목록</h3>
      <Outlet />
      {fruits.map((fruit, i) => (
        <Link to={`/story2/${fruit}`} key={i}>
          과일이름 : {fruit}
        </Link>
      ))}
    </div>
  );
}
