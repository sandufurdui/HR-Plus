import Router from "./components/router";
import { ChakraProvider } from "@chakra-ui/react";

import "./style/main.css";

const App = () => {
  return (
    <ChakraProvider>
      <Router />
    </ChakraProvider>
  );
};

export default App;
