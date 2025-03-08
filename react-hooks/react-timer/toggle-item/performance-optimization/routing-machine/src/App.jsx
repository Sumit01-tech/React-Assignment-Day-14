import React from "react";
import { ChakraProvider, Container, Heading } from "@chakra-ui/react";
import MapComponent from "./MapComponent";

function App() {
  return (
    <ChakraProvider>
      <Container maxW="container.md" p={5}>
        <Heading mb={4}>🗺️ Optimized Map Application</Heading>
        <MapComponent />
      </Container>
    </ChakraProvider>
  );
}

export default App;
