import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import DataContext from "../context/DataContext";
export default function NavHeader() {
  let { state } = useContext(DataContext);
  return (
    <div>
      <Link to="/">HOME</Link>
      <span>|</span>
      <Link to="/boardlist">BOARD</Link>
      <span>|</span>
      <Link to="/boardwriteform">WRITE</Link>
      <span>|</span>
      <Link to="/image">IMAGE</Link>
      <span>|</span>
      {/*state의 user의 login이 false 일 때 Link
      true이면 : user의 writer */}
      {state.user.login ? (
        <span>{state.user.writer}</span>
      ) : (
        <Link to="/loginform">LOGIN</Link>
      )}
    </div>
  );
}
