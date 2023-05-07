import { useState } from "react";
import "./App.css";
import Chat from "./Components/Chat/Chat";
import Sidebar from "./Components/Sidebar/Sidebar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Components/Login/Login";
import { useStateValue } from "./Components/StateProvider";
import Feed from "./Facebook/Feed";

function App() {
  const [{ user }, dispatch] = useStateValue();
  const [selectedApp, setSelectedApp] = useState("");

  const userSelectedEngine = (engine) => {
    debugger;
    setSelectedApp(engine);
  };

  return (
    <div className="app">
      {user ? (
        <div>
          {!selectedApp && (
            <div className="app__body">
              <div className="cards">
                <div
                  className="cardLeft"
                  onClick={(e) => userSelectedEngine("ChatEngine")}
                >
                  <div className="cardLeft__chat">
                    <img
                      src="https://www.pngmart.com/files/11/Chat-Logo-PNG-Image.png"
                      alt="chat"
                    />
                    <h1>Chat Engine</h1>
                  </div>
                </div>
                <div
                  className="cardRight"
                  onClick={(e) => userSelectedEngine("FbEngine")}
                >
                  <div className="cardRight__chat">
                    <img
                      src="https://www.freeiconspng.com/thumbs/share-icon/file-sharing-share-sharing-social-media-icon--28.png"
                      alt="fb"
                    />
                    <h1>Post Stories</h1>
                  </div>
                </div>
              </div>
            </div>
          )}
          {selectedApp === "ChatEngine" && (
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
          )}
          {selectedApp === "FbEngine" && (
            <>
              <div className="app-fb">
                <div className="app__body-fb">
                  <Router>
                    <Routes>
                      <Route path="/*" element={<Feed />}></Route>
                    </Routes>
                  </Router>
                </div>
              </div>
            </>
          )}
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
