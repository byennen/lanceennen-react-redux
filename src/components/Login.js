import React from "react";

import { isUser, isGuest } from "../utils/auth";

const LoginLink = isGuest(({ login }) => (
  <button onClick={() => login()}>Login</button>
));

const LogoutLink = isUser(({ logout }) => (
  <button onClick={() => logout()}>Logout</button>
));

export default ({ loginUser, logoutUser }) => (
  <div>
    Login
    <div>
      <LoginLink login={loginUser} />
      <LogoutLink logout={logoutUser} />
    </div>
  </div>
);
