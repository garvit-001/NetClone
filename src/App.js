import React, { useEffect } from "react";
import "./App.css";
// import axios from './axios';
import HomePage from "./screens/HomePage";
import { BrowserRouter as Routes, Route } from "react-router-dom";
import LoginScreen from "./screens/LoginScreen";
import { login, logout, selectUser } from "./features/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "./firebase";
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        // console.log("logged in");
        console.log(userAuth);
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
      } else {
        // console.log("logout")

        dispatch(logout());
      }
    });

    return unsubscribe;
  }, [dispatch]);

  return (
    <div className="App">
      {/* HomePage */}

      <Routes>
        {!user ? (
          <LoginScreen />
        ) : (
          // <Route exact path="/">
          <HomePage />
          // </Route>
        )}
      </Routes>

      {/* navbar */}
    </div>
  );
}

export default App;
