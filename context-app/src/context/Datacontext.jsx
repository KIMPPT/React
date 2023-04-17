//DataContext는 값을 App에 넣어주는것이 아닌
//DataContext 안에서 작성하는 방법
import React from "react";
import { useState } from "react";

//DataContext 작성
let DataContext = React.createContext(null);

//App.js에서 값 전달할 때 DataContext.Provider를 이용하여 갑 ㅅ전달

//이 공간에서 값을 추가한 Provider작성 후 내보냄
//provider는 컴포넌트 형태
//children : DataContext.Provider 사이에 컴포넌트
let DataProvider = ({ children }) => {
  //사용할 데이터 > useState()
  //함수형 컴포넌트에서 받아서 사용
  let [login, setLogin] = useState(true);
  let [name, setName] = useState("홍길동");

  //state로 작성한 값들을 value에 넣기
  let value = {
    state: { login, name },
    action: { setLogin, setName },
  };
  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};
//감싸서 값을 전달하기 위한 컴포넌트 - 해당 과정을 전달한다
export { DataProvider };
//값을 가져오기 위해 접근하는 값 - 해당 값을 전달한다
export default DataContext;
