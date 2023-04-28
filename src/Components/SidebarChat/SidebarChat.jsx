import React, { useEffect, useState } from "react";
import "./SidebarChat.css";
import Avatar from "@mui/material/Avatar";
import db from "../firebase";
import { Link } from "react-router-dom";

function SidebarChat({ addNewChat, id, name }) {
  const [seed, setSeed] = useState("");
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

  const createChart = () => {
    const roomRoom = prompt("Enter name for chat room");
    if (roomRoom) {
      db.collection("rooms").add({ name: roomRoom });
    }
  };

  useEffect(() => {
    setSeed(Math.floor(Math.random() * avatarList.length));
  }, [avatarList]);

  return !addNewChat ? (
    <Link to={`/rooms/${id}`}>
      <div className="sidebarChat">
        <Avatar
          src={`https://api.dicebear.com/6.x/adventurer/svg?seed=${seed}`}
        />
        <div className="sidebarChat__info">
          <h2>{name}</h2>
          <p>Last message..</p>
        </div>
      </div>
    </Link>
  ) : (
    <div onClick={createChart} className="sidebarChat">
      <h2>Add New Chat Room</h2>
    </div>
  );
}

export default SidebarChat;
