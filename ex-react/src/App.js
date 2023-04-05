import PropComp from "./components/PropComp";
import CountComp from "./components/CountComp";
import CountPropComp from "./components/CountPropComp";
import LoginComp from "./components/LoginComp";
import MemoComp from "./components/MemoComp";
import ExampleComp from "./components/ExampleComp";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/*props을 사용하는 클래스 컴포넌트 */}
      <PropComp color="blue">props 값을 받아와서 글자색을 바꿉니다.</PropComp>
      {/*state을 사용하는 클래스 컴포넌트 
      버튼을 클릭 할때 마다 10씩 증가하는 컴포넌트*/}
      <CountComp />
      {/*props와 state 둘 다 사용하는 클래스 컴포넌트 
      props의 num 값을 가져와서 버튼을 클릭할때마다 num씩 증가*/}
      <CountPropComp num={3} />
      {/*loginComp 생성 후
      state: name, login:false-초기값
      input에서는 name 받아오기
      button 생성 후 login:true로 변경
      h1 태그에 name 출력 + login 값이 true 일 때 화면에 보여줌
      */}
      <LoginComp/>
      <MemoComp/>
      <ExampleComp/>
    </div>
  );
}

export default App;
