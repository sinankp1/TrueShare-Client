import Moment from "react-moment";
import "./style.css";
export default function Message({ message, own, sender, user }) {
  return (
    <div className={own ? "message own" : "message"}>
      <div className="messageTop">
        <img src={own ? user?.picture : sender?.picture} className="messageImg" />
        <p className="messageText">{message.text}</p>
      </div>
      <div className="messageBottom">
        <Moment fromNow interval={30}>
          {message.createdAt}
        </Moment>
      </div>
    </div>
  );
}
