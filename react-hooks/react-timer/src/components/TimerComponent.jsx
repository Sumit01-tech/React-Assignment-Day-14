import React from "react";
import { useTimer } from "../hooks/useTimer";
import { Box, Button, Text, VStack, Heading } from "@chakra-ui/react";

const TimerComponent = () => {
    const { timer, isRunning, startTimer, stopTimer, resetTimer } = useTimer();

    return (
        <Box p={5} maxW="400px" mx="auto" border="1px solid #ccc" borderRadius="8px">
            <Heading size="md" mb={4}>Custom Timer Hook</Heading>
            <VStack spacing={4}>
                <Text fontSize="2xl">Time: {timer} seconds</Text>
                <Button colorScheme="green" onClick={startTimer} isDisabled={isRunning}>
                    Start
                </Button>
                <Button colorScheme="red" onClick={stopTimer} isDisabled={!isRunning}>
                    Stop
                </Button>
                <Button colorScheme="blue" onClick={resetTimer}>
                    Reset
                </Button>
            </VStack>
        </Box>
    );
};

export default TimerComponent;
