import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import FormComponent from "./components/FormComponent";

function App() {
  return (
    <ChakraProvider>
      <FormComponent />
    </ChakraProvider>
  );
}

export default App;
