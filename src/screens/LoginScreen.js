import React, { useState } from "react";
// import HomePage from "./HomePage";
import "./LoginScreen.css";
import SignUpScreen from "./SignUpScreen";

function LoginScreen() {
  const [signIn, setSignIn] = useState(false);
  return (
    <div className="loginScreen">
      <div className="root">
        <nav className="navbar">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
            alt="Netflix Logo"
            className="logo"
          />
          <button onClick={() => setSignIn(true)} className="signIn">
            Sign In
          </button>
        </nav>
      </div>
      <div className="main">
        {!signIn ? (
          <SignUpScreen />
        ) : (
          <div>
            <h1 className="title">Unlimited movies, TV shows and more.</h1>
            <h2 className="subtitle">Watch anywhere. Cancel anytime.</h2>
            <h3 className="short">
              Ready to watch? Enter your email to create or restart your
              membership.
            </h3>
            {/* </div> */}
            <div className="form">
              <form>
                <input
                  className="email-enter"
                  type="email"
                  placeholder="enter your email address"
                />
                <button onClick={() => setSignIn(true)} className="start">
                  Get started
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default LoginScreen;
