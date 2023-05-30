import React, { useState, useEffect } from "react";
import "../../styles/PlaylistAlbum.css";
import { Link } from "react-router-dom";
import authApi
 from "../../apiData/AuthApi";
function Login() {
  const userid = localStorage.getItem("user");

  const [UserData, setUsers] = useState([]);
  useEffect(() => {
    authApi.getUserById(userid).then((res) => {
      setUsers(res.data);
    });
  }, []);
  // console.log(UserData);

  if (UserData != null) {
    return <h1 className = "content_color_black" >{UserData.userName}</h1>;
  }else{
    return (
        <div>
            <Link to={"/signIn"}>
                <button className="signInBtn">Đăng nhập</button>
            </Link>
        </div>
    );
    }
}
export default Login;
