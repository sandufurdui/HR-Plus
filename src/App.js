import { ChakraProvider } from "@chakra-ui/react";
import { Auth0Provider } from "@auth0/auth0-react";

import Router from "./components/router";

import "./style/main.css";

const App = () => {
  return (
    <ChakraProvider>
      <Auth0Provider
        domain={process.env.REACT_APP_AUTH_0_DOMAIN}
        clientId={process.env.REACT_APP_AUTH_0_CLIENT_ID}
        redirectUri={window.location.origin + "/sign-in-sso"}
        useRefreshTokens
        cacheLocation="localstorage"
      >
        <Router />
      </Auth0Provider>
    </ChakraProvider>
  );
};

export default App;
