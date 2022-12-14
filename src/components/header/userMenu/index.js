import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

export default function UserMenu({ user }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const logout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/login");
  };
  return (
    <div className="mmenu">
        <div>
          <Link to="/profile" className="mmenu_header hover3">
            <img src={user?.picture} alt="" />
            <div className="mmenu_col">
              <span>
                {user?.first_name} {user?.last_name}
              </span>
              <span>See your profile</span>
            </div>
          </Link>
          
          <div
            className="mmenu_item hover3"
            onClick={() => {
              logout();
            }}
          >
            <div className="small_circle">
              <i className="logout_filled_icon"></i>
            </div>
            <span>Logout</span>
          </div>
        </div>
    </div>
  );
}
