import React, { useEffect, useState } from "react";
import "./SidebarChat.css";
import Avatar from "@mui/material/Avatar";

function SidebarChat({ addNewChart }) {
  const [seed, setSeed] = useState("");
  const [avatarList, setAvatarList] = useState([
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

  const createChart = () => {
    const roomRoom = prompt("Enter name for chat room");
    if (roomRoom) {
      // do clever db stuff
    }
  };

  useEffect(() => {
    setSeed(Math.floor(Math.random() * avatarList.length));
  }, [avatarList]);

  return !addNewChart ? (
    <div className="sidebarChat">
      <Avatar
        src={`https://api.dicebear.com/6.x/adventurer/svg?seed=${seed}`}
      />
      <div className="sidebarChat__info">
        <h2>Room name...</h2>
        <p>Last message..</p>
      </div>
    </div>
  ) : (
    <div onClick={createChart} className="sidebarChat">
      Hello at 1.20min video
    </div>
  );
}

export default SidebarChat;
