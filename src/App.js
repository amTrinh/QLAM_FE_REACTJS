import "./App.css";
import SideBar from "./components/SideBar";
import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Library from "./pages/Library";

function App() {
  return (
    <div className="main">
      <Router>
        <SideBar />
        <Routes>
          <Route path="/library" exact Component={Library} />
          <Route path="/home" exact Component={Home} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;