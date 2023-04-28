import "./App.css";
import Chat from "./Components/Chat/Chat";
import Sidebar from "./Components/Sidebar/Sidebar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <div className="app__body">
        <Router>
          <Routes>
            <Route path="/*" element={<Sidebar />}></Route>
          </Routes>
          <Routes>
            <Route path="/rooms/:roomId" element={<Chat />}></Route>
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
