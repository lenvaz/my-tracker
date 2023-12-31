import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Auth0Provider } from "@auth0/auth0-react";

console.log("VITE_AUTH0_DOMAIN : ", import.meta.env.VITE_AUTH0_DOMAIN);
console.log("VITE_AUTH0_CLIENTID : ", import.meta.env.VITE_AUTH0_CLIENTID);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Auth0Provider
    domain={import.meta.env.VITE_AUTH0_DOMAIN}
    clientId={import.meta.env.VITE_AUTH0_CLIENTID}
    authorizationParams={{
      // TODO: Need to write a constants file in future to hold such constants
      redirect_uri: `${window.location.origin}${import.meta.env.BASE_URL}`,
    }}
  >
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Auth0Provider>
);
