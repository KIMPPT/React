import './App.css';
//라우터를 가져오기 위해 router-dom에서 컴포넌트 가져옴
import { Routes,Route } from 'react-router-dom';

//각각의 페이지(하나의 주소에 보일 컴포넌트)
import Home from './page/Home';
import About from './page/About';
import Story from './page/Story';
function App() {
  return (
    //Routes를 이용하여 컴포넌트와 주소를 연결하는 Route를 정리
    //div 안에 Routes를 넣어서 사용하도 상관없다
    <Routes>
      {/*app.js 안에서 Route를 애용해서 주소와 컴포넌트 연결 
        path : 주소- '/' : 첫 화면에 보이는 주소
        element : 컴포넌트-{<컴포넌트명/>}를 통해서 전달
      */}
      <Route path='/' element={<Home />}/>
      <Route path='/about' element={<About/>}/>
      {/*<Stroy/> 컴포넌트 생성, 주소는 /st */}
      <Route path='/st' element={<Story/>}/>
    </Routes>
  );
}

export default App;
