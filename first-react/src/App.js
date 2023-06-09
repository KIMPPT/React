import "./App.css";
import MyComponent from "./components/MyComponent.js";
import Login from "./components/LoginComp.js";
//동일한 파일에서 두개이상 내보냈을 때, 그 각각의 값을 각각 가져와야 쓸 수 있다.
import { LoginText } from "./components/LoginComp.js";
import TextComponent from "./components/TextComponent";

import OtherComp from "./components/OtherComp";
import StateComp from "./components/StateComp";
import EventComp from "./components/EventComp";

import RefDomEvent from "./components/RefDomEvent";
import MapComp from "./components/MapComp";
import LifeCycle from "./components/LifeCycle";
import ArrowComp from "./components/ArrowComp";
import ArrowTest from "./components/ArrowTest";
import ArrowState from "./components/ArrowState";
import EffectHook from "./components/EffectHook";
import EffectHook2 from "./components/EffectHook2";
/* React에서 오류가 뜨는 이유
1. 존재하지 않는 컴포넌트 출력(컴포넌트 생성 이후에 이름은 가능하면 바꾸지 말것)
> 이름을 바꾼 후에는 바꾼 그 이름으로 모든 컴포넌츠 수정
2. ()나 {}를 닫지 않았을 경우[하나만 있는 경우]
>오류코드를 보면서 각 라인에 있는 코드들을 주석이나 삭제처리하면서 확인
*/
function App() {
  return (
    <div className="App">
      <h1>리엑트 프로젝트를 수행해서 사용합니다</h1>
      <MyComponent />
      {/*만든 컴포넌트에 속성-값을 통해 props 전달 */}
      <Login login={true} name="홍길동" />
      {/*만든 컴포넌트사이에 글자를 적어서 전달 */}
      {/*porps의 children으로 전달*/}
      {/*props값을 전달 하지 않으면 undefined로 들어감*/}
      <Login>내용 전달</Login>
      {/*새로운 TextComponent 만들어서 children에 들어간 값을 hi태그에 넣어서 출력 
      name값을 받아와서 p 태그에 name님 을 출력*/}
      <TextComponent name="홍길동">반갑습니다</TextComponent>
      <TextComponent name="성춘향">환영합니다</TextComponent>
      <OtherComp />
      {/*state를 가진 컴포넌트는 다시 사용해도 별개의 값으로 들어간다 */}
      <StateComp />
      <StateComp />
      <EventComp />
      <RefDomEvent />
      <MapComp />

      <LifeCycle />
      <ArrowComp text="abc" />
      <ArrowComp>children으로 전달</ArrowComp>

      {/*함수형 컴포넌트 실습
      아래 컴포넌트를 함수형으로 만들고 출력하기
       name="green":h3 태그 출력
       check={true} : check 값이 true 일 때 name 출력
       children : p 태그로 출력
       */}
      <ArrowTest name="green" check={true}>
        환영합니다
      </ArrowTest>
      {/*함수형 컴포넌트의 state 사용 */}
      <ArrowState/>
      {/*함수형 컴포넌트의 hook 사용 */}
      {/*
      <EffectHook/>
      
      */}
      {/*함수형 컴포넌트의 useEffect응용 */}
      <EffectHook2/>
    </div>
  );
}

export default App;
//import를 이용하여 다른 파일에서 값을 가져 올 때
//export를 이용해서 내보내는 값
//index.js에 import App from './App'; 이 있고 export로 내보내는 값을 index.js에서 받는다
