import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { backend_url } from './BackendURL';
import { Box, Heading, useToast, Text } from '@chakra-ui/react';
import jwt_decode from "jwt-decode";
import { addUser } from '../redux/Users/user.action';
import { useDispatch } from 'react-redux';


const Login = () => {
  const navigate = useNavigate();
  const toast = useToast();
  const [user, setUser] = useState(null);
  const dispatch = useDispatch();

  /*google login*/
  const handleCallbackResponse = (response) => {
    var userObject = jwt_decode(response.credential);
    setUser(userObject);
    document.getElementById("signInDiv").hidden = true;
  };

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id:
        "514340861987-f7tbdfd063bbb72d0452dm5je7onj1vj.apps.googleusercontent.com",
      callback: handleCallbackResponse,
    });
    google.accounts.id.renderButton(document.getElementById("signInDiv"), {
      theme: "outline",
      size: "large",
    });
  }, []);

  if (user) {
    toast({
      title: `Login Successfully`,
      status: "success",
      isClosable: true,
    });
    const { name, email, picture } = user;
    localStorage.setItem('name', name);
    let payload = { name, email, picture };
    dispatch(addUser(payload));
    navigate('/users');
  };



  return (
    <Box style={{ textAlign: 'center' }}>
      <Heading mb="10px" style={{ textAlign: "center" }} fontSize={["22px", '22px', '26px']}>Sign in to your account</Heading>
      <Text mb={["20px", '20px', '15px']}>to enjoy all of our cool features ✌️</Text>

      <Box id="signInDiv"></Box>
    </Box>
  );
}

export default Login;