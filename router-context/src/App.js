import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import BoardList from "./page/BoardList";
import Layout from "./page/Layout";
import Board from "./page/Board";
import BoardWriteForm from "./page/BoardWriteForm";
import { DataProvider } from "./context/DataContext";
import DataContext from "./context/DataContext";
function App() {
  return (
    <div className="App">
      <DataProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/boardlist" element={<BoardList />} />
            <Route path="/boardlist/:id" element={<Board />} />
            <Route path="/boardwriteform" element={<BoardWriteForm />} />
            
          </Route>
        </Routes>
      </DataProvider>
    </div>
  );
}

export default App;
