import React, { useState, useEffect, useCallback } from "react";
import { ChakraProvider, Box, Input, Button, VStack, Text } from "@chakra-ui/react";
import Post from "./components/Post";

function App() {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setTimer(prev => prev + 1), 1000);
    return () => clearInterval(interval);
  }, []);

  const toggleVerify = useCallback((id) => {
    setPosts(prevPosts =>
      prevPosts.map(post =>
        post.id === id ? { ...post, verifyPost: !post.verifyPost } : post
      )
    );
  }, []);

  const addPost = () => {
    if (!title || !body) return;
    setPosts([...posts, { id: posts.length + 1, title, body, verifyPost: false }]);
    setTitle("");
    setBody("");
  };

  return (
    <ChakraProvider>
      <Box p={5} maxW="500px" mx="auto" borderRadius="8px">
        <Text fontSize="2xl" fontWeight="bold">Timer: {timer}s</Text>

        <VStack spacing={3}>
          <Input
            type="text"
            placeholder="Post Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <Input
            type="text"
            placeholder="Post Body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
          <Button colorScheme="blue" onClick={addPost}>Add Post</Button>
        </VStack>

        <VStack mt={5} spacing={3}>
          {posts.map(post => (
            <Post key={post.id} post={post} onToggleVerify={toggleVerify} />
          ))}
        </VStack>
      </Box>
    </ChakraProvider>
  );
}

export default App;
