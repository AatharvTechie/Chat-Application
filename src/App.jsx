import "./App.css";
import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

//  components
import Signup from "./Authentication/Signup";
import Login from "./Authentication/Login";
import ChatList from "./chats/chatList";
import Status from "./Status/statusList";
import Call from "./calls/call";
import CallPage from "./calls/callPage";

function App() {
  const [isAlreadyAccount, setAlreadyAccount] = useState(false);
  const [isAlreadyLoggedIn, setIsAlreadyLoggedIn] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/status" element={<Status />}></Route>
        <Route path="/calls" element={<Call />}></Route>
        {/* Default Route */}
        <Route
          path="/"
          element={
            isAlreadyLoggedIn ? (
              <Navigate to="/chatList" />
            ) : isAlreadyAccount ? (
              <Navigate to="/login" />
            ) : (
              <Signup
                setAlreadyAccount={setAlreadyAccount}
                switchToLogin={() => setAlreadyAccount(true)}
                // onSignup={handleOnSignup}
              />
            )
          }
        />

        {/* Login Page */}
        <Route
          path="/login"
          element={
            isAlreadyLoggedIn ? (
              <Navigate to="/chatList" />
            ) : (
              <Login
                switchToSignUp={() => setAlreadyAccount(false)}
                // userData={userData}
                setIsAlreadyLoggedIn={setIsAlreadyLoggedIn}
              />
            )
          }
        />

        {/* Chat List Page */}
        <Route
          path="/chatList"
          element={isAlreadyLoggedIn ? <ChatList /> : <Navigate to="/login" />}
        />

        {/* Chat Window Page */}
        <Route
          path="/chatWindow"
          element={isAlreadyLoggedIn ? <ChatList /> : <Navigate to="/login" />}
        />

        {/* Call Window Page */}
        <Route path="/callWindow" element={<CallPage />} />

        {/* left navigation routes */}
        <Route path="/callWindow" element={<CallPage />} />

        {/* Catch-all for Undefined Routes */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
