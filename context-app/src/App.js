import "./App.css";
import ThemeContext from "./context/Themecontext";
import Toolbar from "./components/Toolbar";
function App() {
  return (
    <div className="App">
      <ThemeContext.Provider value="light">
        <Toolbar />
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
