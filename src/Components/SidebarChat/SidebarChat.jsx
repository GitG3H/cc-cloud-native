import React, { useEffect, useState } from "react";
import "./SidebarChat.css";
import Avatar from "@mui/material/Avatar";
import db from "../firebase";
import { Link } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";

function SidebarChat({ addNewChat, id, name }) {
  const [seed, setSeed] = useState("");
  const [messages, setMessages] = useState("");
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
    if (id) {
      db.collection("rooms")
        .doc(id)
        .collection("messages")
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) =>
          setMessages(snapshot.docs.map((doc) => doc.data()))
        );
    }
  }, [id]);

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
          <p>{messages[0]?.message}</p>
        </div>
      </div>
    </Link>
  ) : (
    <div onClick={createChart} className="sidebarChat">
      <h2>
        {" "}
        <AddIcon /> Chat Room
      </h2>
    </div>
  );
}

export default SidebarChat;
