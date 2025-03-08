import React from "react";
import { useToggleItems } from "../hooks/useToggleItems";
import { Box, Button, Text, VStack, Heading } from "@chakra-ui/react";

const ToggleComponent = () => {
    const [state, toggleState] = useToggleItems(["A", "B", "C"], 1);

    return (
        <Box p={5} maxW="400px" mx="auto" border="1px solid #ccc" borderRadius="8px">
            <Heading size="md" mb={4}>Custom Toggle Hook</Heading>
            <VStack spacing={4}>
                <Text fontSize="2xl">Current State: {state}</Text>
                <Button colorScheme="blue" onClick={toggleState}>
                    Toggle State
                </Button>
            </VStack>
        </Box>
    );
};

export default ToggleComponent;
