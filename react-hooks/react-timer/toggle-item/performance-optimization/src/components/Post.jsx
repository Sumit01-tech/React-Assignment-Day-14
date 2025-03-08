import React, { memo, useMemo } from "react";
import { Box, Button, Text } from "@chakra-ui/react";

const Post = ({ post, onToggleVerify }) => {
    const backgroundColor = useMemo(() => {
        return `hsl(${Math.random() * 360}, 80%, 80%)`;
    }, []);

    console.log(`Rendering Post: ${post.id}`);

    return (
        <Box
            p={4}
            borderRadius="8px"
            boxShadow="md"
            mb={4}
            bg={backgroundColor}
        >
            <Text fontSize="lg" fontWeight="bold">{post.title}</Text>
            <Text>{post.body}</Text>
            <Button mt={2} colorScheme="blue" onClick={() => onToggleVerify(post.id)}>
                {post.verifyPost ? "Verified" : "Verify"}
            </Button>
        </Box>
    );
};
export default memo(Post);
