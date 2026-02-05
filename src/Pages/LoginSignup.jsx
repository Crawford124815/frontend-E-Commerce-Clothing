import React, { useState } from "react";
import "./CSS/LoginSignup.css";

const LoginSignup = () => {
  const [password, setPassword] = useState("");
  const [isShown, setIsShown] = useState(false);

  const togglePassword = () => {
    setIsShown((prev) => !prev);
  };

  return (
    <div className="login__signup">
      <div className="login__signup-container">
        <h1>Sign Up</h1>
        <div className="login__signup-fields">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Email Address" />
          <input
            type={isShown ? "text" : "password"}
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            placeholder="Password"
          />
        </div>
        <div className="show__password">
          <input
            id="show-password"
            type="checkbox"
            checked={isShown}
            onChange={togglePassword}
          />
          <label htmlFor="show-password">Show Password</label>
        </div>
        <button>Continue</button>
        <p className="login__signup-login">
          Already have an account? <span>Login Here</span>
        </p>
        <div className="login__signup-agree">
          <input type="checkbox" name="" id="" />
          <p>By continuing, I agree to the terms of use & privacy policy</p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
