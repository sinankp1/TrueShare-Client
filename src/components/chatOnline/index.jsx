import axios from "axios";
import { useEffect, useState } from "react";
import { getFriends } from "../../functions/user";
import "./style.css";
export default function ChatOnline({
  onlineUsers,
  currentUser,
  setCurrentChat,
}) {
  const [friends, setFriends] = useState([]);
  const [onlineFriends, setOnlineFriends] = useState([]);

  useEffect(() => {
    const getFriendss = async () => {
      try {
        const users = await getFriends(currentUser.token);
        setFriends(users);
      } catch (error) {
        console.log(error);
      }
    };
    getFriendss();
  }, [currentUser]);
console.log(onlineUsers)
  return (
    <>
      <div className="chatOnline">
        <div className="chatOnlineFriend">
          <div className="chatOnlineImgContainer">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg"
              alt=""
              className="chatOnlineImg"
            />
            <div className="chatOnlineBadge"></div>
          </div>
          <span className="chatOnlineName">Dheeraj</span>
        </div>
      </div>
    </>
  );
}
