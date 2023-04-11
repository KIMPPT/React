import './App.css';
//라우터를 가져오기 위해 router-dom에서 컴포넌트 가져옴
import { Routes,Route } from 'react-router-dom';

//각각의 페이지(하나의 주소에 보일 컴포넌트)
import Home from './page/Home';
import About from './page/About';
import Story from './page/Story';
import Story2 from './page/Story2';
import Error from './page/Error';
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
      {/* URL 파라미터를 이용한 값 전달
        path의 주소에 값이 들어갈 공간에 이름 작성
        값은 브러우저에 주소창에 입력했을 때 값이 들어감
      */}
      <Route path='/st/:value' element={<Story/>}/>
      {/*story를 story2로 수정하여 사용 
        URL 파라미터 이름은 name으로 작성
        URL 파라미터로 전달할 값은 green
        useParams 이용해서 화면에 출력
      */}
      <Route path='/story2/:name' element={<Story2/>}/>
      {/*
      path='*'를 하면 지정된 주소 외에는 전부 element로 연결된 컴포넌트가 출력된다 */}
      <Route path='*' element={<Error/>}/>
    </Routes>
  );
}

export default App;
