import { Box, Heading, Text } from '@chakra-ui/react';
import React from 'react'

const PostsList = ({ posts }) => {
    return (
        <Box textAlign={"center"} display={"grid"} gridTemplateColumns={["repeat(2,1fr)", "repeat(2,1fr)", "repeat(3,1fr)"]} gap={"20px"} w="90%" m="auto">
            {posts && posts.map(({ _id, username, title, body }) =>
                <Box key={_id} boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px" padding={"20px 10px"} borderRadius={"10px"}>
                    <Heading fontSize={'20px'}>Username: {username}</Heading>
                    <Text m='1% 0'>Title: {title}</Text>
                    <Text>Body: {body}</Text>
                </Box>
            )}
        </Box>
    );
}

export default PostsList;