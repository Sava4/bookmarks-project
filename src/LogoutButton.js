import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
  const { logout, user, getAccessTokenSilently } = useAuth0();
  // useEffect(() => {
  //   const getUserMetadata = async () => {
  //     const domain = "dev-3p5izukg.eu.auth0.com";

  //     try {
  //       const accessToken = await getAccessTokenSilently({
  //         audience: `https://${domain}/api/v2/`,
  //         scope: "read:current_user",
  //       });

  //       const userDetailsByIdUrl = `https://${domain}/api/v2/users/${user.sub}`;

  //       const metadataResponse = await fetch(userDetailsByIdUrl, {
  //         headers: {
  //           Authorization: `Bearer ${accessToken}`,
  //         },
  //       });

  //       const { user_metadata } = await metadataResponse.json();

  //       setUserMetadata(user_metadata);
  //     } catch (e) {
  //       console.log(e.message);
  //     }
  //   };

  //   getUserMetadata();
  // }, []);
  return (
    <>
      <span>
        Logged in as: <strong>{user.email}</strong>
      </span>
      <button
        class="btn ml-2"
        onClick={() => logout({ returnTo: window.location.origin })}
      >
        Log Out
      </button>
    </>
  );
};

export default LogoutButton;
