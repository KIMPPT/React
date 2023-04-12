import "./App.css";
//라우터를 가져오기 위해 router-dom에서 컴포넌트 가져옴
import { Routes, Route } from "react-router-dom";

//각각의 페이지(하나의 주소에 보일 컴포넌트)
import Home from "./page/Home";
import About from "./page/About";
import Story from "./page/Story";
import Story2 from "./page/Story2";
import Error from "./page/Error";
import Articles from "./page/Articles";
import Article from "./page/Article";
import Story2List from "./page/Story2List";
import HeaderLink from "./components/HeaderLink";
import Layout from "./page/Layout";
import NavigatePage from "./page/NavigatePage";
import NaviStatePage from "./page/NaviStatePage";
function App() {
  return (
    //Routes를 이용하여 컴포넌트와 주소를 연결하는 Route를 정리
    //div 안에 Routes를 넣어서 사용하도 상관없다
    <div>
      {/*Routes 안에 들어가지 않는 컴포넌트를 사용해서
      화면에 계속 띄워 둘 수 있다 */}
      <HeaderLink />
      <Routes>
        <Route path="/" element={<Layout />}>
          {/*app.js 안에서 Route를 애용해서 주소와 컴포넌트 연결 
        path : 주소- '/' : 첫 화면에 보이는 주소
        element : 컴포넌트-{<컴포넌트명/>}를 통해서 전달
      */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/*<Stroy/> 컴포넌트 생성, 주소는 /st */}
          {/* URL 파라미터를 이용한 값 전달
        path의 주소에 값이 들어갈 공간에 이름 작성
        값은 브러우저에 주소창에 입력했을 때 값이 들어감
      */}
          <Route path="/st/:value" element={<Story />} />
          {/*story를 story2로 수정하여 사용 
        URL 파라미터 이름은 name으로 작성
        URL 파라미터로 전달할 값은 green
        useParams 이용해서 화면에 출력
      */}
          {/*
        <Route path="/story2/:name" element={<Story2 />} />
        코드는 위에서 아래로 읽기 때문에 실행 할 때 위에 코드로 읽어버려서
        동작이 반쯤만 정상적이였음
      */}
          {/*page 폴터에 Story2List.jsx를 만들고
          fruit 배열을 들고와서 Link 작성
          Link를 클릭했을 때 Story2가 보일 수 있게 작성하세요
          주소창에 /story2를 입력해서 들어가기
        */}
          <Route path="/story2" element={<Story2List />}>
            <Route path=":name" element={<Story2 />} />
          </Route>
          {/*관련된 페이지는 주소로 분류해서 사용가능 */}
          <Route path="/articles" element={<Articles />}>
            {/*중첩 라우터-Outlet과 함께 사용 */}
            <Route path=":id" element={<Article />}></Route>
          </Route>
          {/*navigate를 이용한 값 전달 
            NavigatePage.jsx 생성 > 버튼을 클릭하면 이동하면 하면서 값 전달
            NaviStatePage.jsx > 전달받은 값 출력
          */}
          <Route path="/navigate" element={<NavigatePage />}></Route>
          <Route path="/navigate/state" element={<NaviStatePage />}></Route>

          {/*
      path='*'를 하면 지정된 주소 외에는 전부 element로 연결된 컴포넌트가 출력된다 */}
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
