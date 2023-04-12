import React from "react";
import FormComp from "../components/FormComp";
//Link를 통해서 react-router-dom에서 지정한 주소로 이동
import { Link } from "react-router-dom";
export default function Home() {
  let fruit = "apple";
  let fruits = ["apple", "pear", "banana", "orange"];
  return (
    <div>
      <h1>Home</h1>
      <p>현재 화면은 홈입니다</p>
      {/*a 태그 대신 컴포넌트의 주소로 이동 */}
      <Link to="/about">About</Link>
      {/*to 에 {}인 JS 형식도 가능 */}
      <Link to={`/st/${fruit}`}>st/apple 로 이동</Link>
      <Link to={`/st/${fruits[3]}`}> Story</Link>

      <FormComp />
      <hr />
      {
        /*map을 이용해서 배열의 값을 Link의 to 주소값으로 사용 */
        fruits.map((f, i) => (
          <Link to={`/st/${f}`} key={i}>
            [{f}Story]
          </Link>
        ))
      }
      <hr />
      {/* fruits를 이용해서 map을 사용해서 /story2/apple, /storys/pear 와 같은 
        이동하는 Link 작성
      */}
      {fruits.map((f, i) => (
        <Link to={`/story2/${f}`} key={i}>
          |{f}|
        </Link>
      ))}
    </div>
  );
}
