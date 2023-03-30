import PropComp from './components/PropComp';
import CountComp from './components/CountComp';
import CountPropComp from './components/CountPropComp';
import './App.css';

function App() {
  return (
    <div className="App">
      {/*props을 사용하는 클래스 컴포넌트 */}
      <PropComp color="blue">props 값을 받아와서 글자색을 바꿉니다.</PropComp>
      {/*state을 사용하는 클래스 컴포넌트 
      버튼을 클릭 할때 마다 10씩 증가하는 컴포넌트*/}
      <CountComp/>
      {/*props와 state 둘 다 사용하는 클래스 컴포넌트 
      props의 num 값을 가져와서 버튼을 클릭할때마다 num씩 증가*/}
      <CountPropComp num={3}/>
    </div>
  );
}

export default App;
