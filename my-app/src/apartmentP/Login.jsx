// Login.jsx
import { useEffect, useState } from "react";
import { login } from "./api/apiOwner";
import { Navigate } from "react-router";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "./redux/Actions";
// import './Login.css'; // Importing CSS for styling
import swal from "sweetalert";

export const Login = () => {
    const [error, setError] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const dis = useDispatch();

    const funcLogin = async (e) => {
        e.preventDefault();
        setError(' ');
        try {
            const response = await login(email, password);
            dis(setCurrentUser(response.data.user._id, response.data.user.email));
            localStorage.setItem("token", response.data.token);
            swal("התחברת בהצלחה", "שמחים על הצטרפותך...😋", "success")
            
            navigate('/');
        } catch (error) {
            setError('Error: ' + error.message);
        }
    };

    const funcS = () => {
        navigate('/SignIn');
    };

    return (
        <div class="login-box">
            {/* // <div className="login-container">
        //     <h2 className="login-title">Login</h2> */}
            {/* <form className="login-form"> */}
            <form>
                <div class="user-box">
                    <input
                        id="email"
                        type="email"
                        placeholder="Enter Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />                <label htmlFor="email">Email</label>

                </div>
                <div class="user-box">
                    <input
                        id="password"
                        type="password"
                        placeholder="Enter Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />                <label htmlFor="password">Password</label>
                </div>
                <div id="but">
                <button className="login-button" onClick={funcLogin}>Login</button>
                <br></br><br></br>
                <button className="login-button" onClick={funcS}>Sign In</button>
                </div>
                {error && <p className="error-message">{error}</p>}
            </form>
        </div>
    );
};

{/* <div class="login-box">
  <h2>Login</h2>
  <form>
    <div class="user-box">
      <input type="text" name="" required="">
      <label>Username</label>
    </div>
    <div class="user-box">
      <input type="password" name="" required="">
      <label>Password</label>
    </div>
  </form>
</div> */}