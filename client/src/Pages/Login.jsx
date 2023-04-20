import React, { useState } from 'react';
import { AiOutlineGoogle, AiOutlineTwitter, AiFillFacebook, AiFillGithub } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import { backend_url } from './BackendURL';
import { Box, Heading, Input, useToast, Text, InputGroup, InputRightElement, Button } from '@chakra-ui/react';
import { VscEye, VscEyeClosed } from 'react-icons/vsc';


const Login = () => {
  const navigate = useNavigate();
  const toast = useToast();

  return (
    <Box style={{ textAlign: 'center' }}>
      <Heading mb="10px" style={{ textAlign: "center" }} fontSize={["22px", '22px', '26px']}>Sign in to your account</Heading>
      <Text mb={["20px", '20px', '15px']}>to enjoy all of our cool features ✌️</Text>
      
    </Box>
  );
}

export default Login;