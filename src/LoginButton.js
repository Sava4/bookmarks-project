import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <>
      <span>You must authenticate to use this app</span>
      <button class="btn btn-primary ml-2" onClick={() => loginWithRedirect()}>
        Log In
      </button>
    </>
  );
};

export default LoginButton;
