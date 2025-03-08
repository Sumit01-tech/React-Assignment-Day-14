import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import TimerComponent from "./components/TimerComponent";

function App() {
  return (
    <ChakraProvider>
      <TimerComponent />
    </ChakraProvider>
  );
}

export default App;
