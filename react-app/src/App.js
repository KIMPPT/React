import FilterableProductTable from "./components/FilterableProductTable";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h3>React 홈페이지의 React로 사고하기 참고</h3>
      <a href="https://ko.reactjs.org/docs/thinking-in-react.html">
        홈페이지로 이동
      </a>
      <FilterableProductTable/>
    </div>
  );
}

export default App;
