import React, { useState, useEffect } from "react";
import "./Feed.css";
import StoryReel from "./StoryReel";
import MessageSender from "./MessageSender";
import Post from "./Post";
import db from "../Components/firebase";

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, []);

  return (
    <div className="feed">
      <div className="storyReel">
        <StoryReel />
      </div>
      <MessageSender />
      {posts.map((post) => (
        <Post
          key={post.id}
          image={post.data.image}
          message={post.data.message}
          timestamp={post.data.timestamp}
          username={post.data.username}
          profilePic={post.data.profilePic}
        />
      ))}

      {/*  Story Reel 
      MessageSender */}
    </div>
  );
}

export default Feed;
