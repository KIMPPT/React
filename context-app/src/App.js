import "./App.css";
import ThemeContext from "./context/Themecontext";
import Toolbar from "./components/Toolbar";
import Objectcontext from "./context/Objectcontext";
import Contextbox from "./components/Contextbox";
import { DataProvider } from "./context/Datacontext";
import Databox from "./components/Databox";
let initValue = { name: "성춘향", login: true };
function App() {
  return (
    <div className="App">
      <ThemeContext.Provider value="light">
        <Objectcontext.Provider value={initValue}>
          <Toolbar />
        </Objectcontext.Provider>
      </ThemeContext.Provider>
      <ThemeContext.Provider value="blue">
        <Contextbox />
      </ThemeContext.Provider>
      <DataProvider>
        <Databox />
      </DataProvider>
    </div>
  );
}

export default App;
