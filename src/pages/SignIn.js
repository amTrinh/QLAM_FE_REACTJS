import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/SignIn.css";
import EmailIcon from "@mui/icons-material/Email";
import KeyIcon from "@mui/icons-material/Key";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { FcGoogle } from "react-icons/fc";
import { IconButton, Input } from "@mui/material";
import authApi from "../apiData/AuthApi";

function SignIn() {
  const [values, setValues] = useState(false);

  const form_EndPoint = "http://localhost:8080/api/v1/users";

  const handleClickShowPassword = () => {
    setValues(!values);
  };

const [userName, setUserName] = useState("");
const [password, setPassword] = useState("");
const [message, setMessage] = useState("");
let handleSubmit = async (e) => {
  e.preventDefault();
  try {
    (async () => {
      const log = authApi.login({userName,password});
      log.then((response) => {
        if(response != null)
          if (response.status === 200) {
            localStorage.setItem("user", JSON.stringify(response.data.id));
            setUserName("");
            setPassword("");
            setMessage("successfully");
          } else {
            setMessage("Some error occured");
          }
        // console.log(response);
      });
    })();
  } catch (err) {
    console.log(err);
  }
};
  return (
    <div className="signinContainer">
      <h1>Đăng nhập</h1>
      <div className="signinGoogle">
        <FcGoogle className="signinIcon" size={25} />
        <p>
          <Link to={"#"}>Tiếp tục với Google</Link>
        </p>
      </div>
      <p className="dividingLine">
        <span>HOẶC</span>
      </p>
      <form
        className="signinForm"
        action={form_EndPoint}
        method="POST"
        onSubmit={handleSubmit}>
        <div className="div1">
          <EmailIcon className="signinIcon" />
          <div>
            <p>Username</p>
            <Input
              name="userName"
              value={userName}
              type="text"
              placeholder="example@gmail.com"
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
        </div>
        <div className="div1">
          <KeyIcon className="signinIcon" />
          <div>
            <p>Mật khẩu</p>
            <Input
              name="password"
              value={password}
              placeholder="******"
              type={values ? "text" : "password"}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <IconButton
            onClick={handleClickShowPassword}
            className="showHideIcon">
            {values ? <VisibilityIcon /> : <VisibilityOffIcon />}
          </IconButton>
        </div>
        <div className="div3">
          <div>
            <input alignItems="left" type="checkbox" name="rememberAccount" />
            <p>Nhớ tên tài khoản</p>
          </div>
          <p>
            <Link to={"#"}>Quên mật khẩu?</Link>
          </p>
        </div>
        <input
          // onClick={submitLoginForm}
          type="submit"
          name="submitSignin"
          className="submitSignin"
          value={`Đăng nhập`}
        />
        <div className="message">{message ? <p>{message}</p> : null}</div>
      </form>
    </div>
  );
}

export default SignIn;
