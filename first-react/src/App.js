import logo from './logo.svg';
import './App.css';
import MyComponent from './components/MyComponent.js';
import Login from './components/LoginComp.js';
//동일한 파일에서 두개이상 내보냈을 때, 그 각각의 값을 각각 가져와야 쓸 수 있다.
import {LoginText} from './components/LoginComp.js';
function App() {
  return (
    <div className="App">
      <h1>리엑트 프로젝트를 수행해서 사용합니다</h1>
      <MyComponent/>
      {/*만든 컴포넌트에 속성-값을 통해 props 전달 */}
      <Login login={true} name="홍길동"/>

    </div>
  );
}

export default App; 
//import를 이용하여 다른 파일에서 값을 가져 올 때
//export를 이용해서 내보내는 값  
//index.js에 import App from './App'; 이 있고 export로 내보내는 값을 index.js에서 받는다