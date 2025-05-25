// # SignIn.jsx

import { useEffect, useState } from "react";
import { login, signIn } from "./api/apiOwner";
import { Navigate, useNavigate } from "react-router";
// import './SignIn.css'; // Importing the CSS file for styling
import swal from "sweetalert";

export const SignIn = () => {
    const [error, setError] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [moreTelephone, setMoreTelephone] = useState('');
    const [phone, setPhone] = useState('');
    const navigate = useNavigate();

    const funcSignIn = async (e) => {
        e.preventDefault();
        setError(' ');
        try {
            const response = await signIn(phone, email, password, moreTelephone);
            console.log(response.data);
            swal("התחברת בהצלחה","שמחים על הצטרפותך...😋","success")

            navigate('/Login');
        } catch (error) {
            swal("התחברות נכשלה ","נסה שוב...😋","error")

            setError(error);
        }
    };
         
    return (
        <div class="login-box">
            {/* // <div className="login-container">
        //     <h2 className="login-title">Login</h2> */}
            {/* <form className="login-form"> */}
            <form onSubmit={funcSignIn}>
                <div class="user-box">
                    <label>Email</label><br></br><br></br>
                    <input
                        type="email"
                        placeholder="Enter Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>

                <div class="user-box"><label>Password</label><br></br><br></br>
                    <input
                        type="password"
                        placeholder="Enter Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    /></div>


                <div class="user-box"><label>Phone</label><br></br><br></br>
                    <input
                        type="text"
                        placeholder="Enter Phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                    />
                </div>
                <div class="user-box">
                    <label>More Telephone</label><br></br><br></br>
                    <input
                        type="text"
                        placeholder="Enter More Telephone"
                        value={moreTelephone}
                        onChange={(e) => setMoreTelephone(e.target.value)}
                        required
                    />
                </div>

                <br />
                <button type="submit">Log In</button>
                {error && <p className="error-message">{error}</p>}
            </form>
        </div>
    );
};


