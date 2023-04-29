import { useState } from "react";
import "./App.css";
import Chat from "./Components/Chat/Chat";
import Sidebar from "./Components/Sidebar/Sidebar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Components/Login/Login";
import { useStateValue } from "./Components/StateProvider";

function App() {
  const [{ user }, dispatch] = useStateValue();
  console.log(user);

  return (
    <div className="app">
      {user ? (
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
      ) : (
        <>
          <Login />
        </>
      )}
    </div>
  );
}

export default App;
