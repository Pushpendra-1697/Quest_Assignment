import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { backend_url } from './BackendURL';
import { useSelector } from 'react-redux';
import { BiLoaderCircle } from "react-icons/bi";
import { Alert, AlertIcon, Box, Container, Heading, Img, Text } from '@chakra-ui/react';


function getUserById(id) {
    return fetch(`${backend_url}/users/get/${id}`).then((res) => res.json());
};

const SingleUser = () => {
    const { loading, error } = useSelector((store) => store.userManager);
    const [data, setData] = useState(null);
    const params = useParams();


    useEffect(() => {
        getUserById(params.user_id).then((res) => setData(res.user)).catch((err) => console.log(err));
    }, []);


    if (data === null) {
        return (<h1 style={{ textAlign: "center", fontSize: "23px" }}>Loading....</h1>);
    };

    const { picture, email, name, createdAt } = data;
    return (
        <>
            {(loading || data == null) && (
                <Box display={"flex"} justifyContent="center" alignItems={"center"}>
                    {" "}
                    <BiLoaderCircle fontSize={"34px"} />{" "}
                </Box>
            )}
            {error && <Box display={"flex"} justifyContent="center" alignItems={"center"}>
                <Alert status='error' w="300px" >
                    <AlertIcon />
                    {`Something went Wrong`}
                </Alert>
            </Box>}

            <Container textAlign={'center'} w="95%" boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px" padding={"10px"} borderRadius={"10px"} mt={["15%", "15%", "5%"]}>
                <Img w='100%' src={picture} alt={name} />
                <Heading m='1% 0' fontSize={'22px'}>Username: {name}</Heading>
                <Text>Email: {email}</Text>
                <Text mt='1%'>Login Time: {createdAt}</Text>
            </Container>
        </>
    );
}

export default SingleUser;