import React, { useState, useEffect } from "react";
import "./Chat.css";
import Avatar from "@mui/material/Avatar";
import { IconButton } from "@mui/material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
//import MicIcon from "@mui/icons-material/Mic";
import SendIcon from "@mui/icons-material/Send";

function Chat() {
  const [seed, setSeed] = useState("");
  const [input, setInput] = useState("");
  const [avatarList] = useState([
    "Peanut",
    "Daisy",
    "Buster",
    "Samantha",
    "George",
    "Sasha",
    "Trouble",
    "Boo",
    "Chester",
    "Rocky",
    "Cali",
    "Willow",
    "Boots",
  ]);

  const sendMessage = (e) => {
    e.preventDefault();
    setInput("");
  };

  useEffect(() => {
    setSeed(Math.floor(Math.random() * avatarList.length));
  }, [avatarList]);

  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar
          src={`https://api.dicebear.com/6.x/adventurer/svg?seed=${seed}`}
        />
        <div className="chat__headerInfo">
          <h3>Room name</h3>
          <p>Last seen at ...</p>
        </div>

        <div className="chat__headerRight">
          <IconButton>
            <SearchOutlinedIcon />
          </IconButton>
          <IconButton>
            <AttachFileIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className="chat__body">
        <p className={`chat__message ${true && "chat__receiver"}`}>
          <span className="chat__name">Bharath</span>
          Hey Guys
          <span className="chat__timestamp">1.33 pm</span>
        </p>
      </div>
      <div className="chat__footer">
        <InsertEmoticonIcon />
        <form>
          <input
            value={input}
            type="text"
            placeholder="Send a message.."
            onChange={(e) => setInput(e.target.value)}
          />
          <button onClick={sendMessage} className="submitBtn" type="submit">
            <SendIcon />
          </button>
        </form>
      </div>
    </div>
  );
}

export default Chat;
