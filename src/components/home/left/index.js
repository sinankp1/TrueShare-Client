import LeftLink from "./LeftLink";
import "./style.css";
import { left } from "../../../data/home";
import { Link } from "react-router-dom";
import { ArrowDown1 } from "../../../svg";
import { useState } from "react";
import Shortcut from "./Shortcut";
export default function LeftHome({ user }) {
  return (
    <div className="left_home">
      <div style={{position:"relative",top:"60px"}} >  
      <Link to="/profile" className="left_link hover1">
        <img src={user?.picture} alt="" />
        <span>
          {user?.first_name} {user.last_name}
        </span>
      </Link>
      <Link to="/friends/all" className="left_link hover1">
        <img src={`../../../left/friends.png`} alt="" />
        <span>
          Friends
        </span>
      </Link>
      <Link to="/friends/requests" className="left_link hover1">
        <div className="small_circle">
          <i className="friends_requests_icon"></i>
        </div>
        <span>
          Friend requests
        </span>
      </Link>
      <Link to="/friends/suggestions" className="left_link hover1">
        <div className="small_circle">
          <i className="friends_suggestions_icon"></i>
        </div>
        <span>
         Suggestions
        </span>
      </Link>
      </div>
    </div>
  );
}
