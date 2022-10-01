import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated, isLoading } = useAuth0();
  if (isLoading) return ( <h3>Loading...</h3>)

  return (
    !isAuthenticated &&
    <button className="btn" onClick={() => loginWithRedirect()}>Log In</button>
  );
};

export default LoginButton;