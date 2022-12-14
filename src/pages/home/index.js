import { useSelector } from "react-redux";
import "./style.css";
import Header from "../../components/header";
import CreatePost from "../../components/createPost";
import SendVerification from "../../components/home/sendVerification";
import { useEffect, useState } from "react";
import Post from "../../components/post";
import { useRef } from "react";
import { getAllPosts } from "../../functions/getAllPosts";
import LeftHome from "../../components/home/left";
import RightHome from "../../components/home/right";

export default function Home({ posts, setVisible,dispatch }) {
  const { user } = useSelector((state) => ({ ...state }));
  const middle = useRef(null);
  const [height, setHeight] = useState();
  useEffect(()=>{
    getAllPosts(dispatch,user)
  },[])
  useEffect(() => {
    setHeight(middle.current.clientHeight);
  }, [posts]);
  return (
    <div className="home" style={{ height: `${height}px` }}>
      {!user.verified && (
        <div className="blur1">
          <SendVerification user={user} />
        </div>
      )}
      <Header page="home" />
      <LeftHome user={user} />
      <div className="home_middle" ref={middle}>
        <CreatePost user={user} setVisible={setVisible} />
        <div className="posts">
          {posts.map((post) => (
            <Post key={post._id} post={post} user={user} />
          ))}
        </div>
      </div>
      <RightHome user={user}/>
    </div>
  );
}
