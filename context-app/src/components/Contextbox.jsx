import React from "react";

//context의 값을 가져오기 위해서 context 호출
import ThemeContext from "../context/Themecontext";
import { useContext } from "react";
export default function Contextbox() {
  return (
    <div>
      <ContextText></ContextText>
    </div>
  );
}
function ContextText() {
  let text = useContext(ThemeContext);
  return <p>{text}</p>;
}
