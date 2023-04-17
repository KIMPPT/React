import React from "react";
import { useState } from "react";
let DataContext = React.createContext("");

let DataProvider = ({ children }) => {
  //데이터를 저장 및 수정하기 위해 useState 사용
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
      date: "2023-04-14",
      writer: "green",
    },
  ]);
  //value에 담을 데이터 정리
  let value = {
    state: { boardlist },
    action: { setBoardlist },
  };
  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};
//값을 전달하기 위해 감싸는 컴포넌트
export {DataProvider}
//값을 사용하기 위해 호출하는 컴포넌트
export default DataContext;