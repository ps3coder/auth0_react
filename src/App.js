import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const App = () => {
  const { user, loginWithRedirect } = useAuth0();
  console.log("Current User", user);
  return <div>
    <button onClick={(e) => loginWithRedirect()}>
      Login with redirect
    </button>
  </div>;
};

export default App;
