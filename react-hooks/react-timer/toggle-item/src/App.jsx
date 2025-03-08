import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import ToggleComponent from "./components/ToggleComponent";

function App() {
  return (
    <ChakraProvider>
      <ToggleComponent />
    </ChakraProvider>
  );
}

export default App;
