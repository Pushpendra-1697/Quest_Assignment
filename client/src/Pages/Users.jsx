import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { getUsers } from '../redux/Users/user.action';
import { Alert, AlertIcon, Box } from '@chakra-ui/react';
import { BiLoaderCircle } from "react-icons/bi";
import UserList from '../Components/UserList';

const Users = () => {
  const { loading, error, users } = useSelector((store) => store.userManager);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, []);


  // if (localStorage.getItem('name') === null) {
  //   return <Navigate to="/" />
  // }
  return (
    <Box>
      {loading && (
        <Box display={"flex"} justifyContent="center" alignItems={"center"}>
          {" "}
          <BiLoaderCircle fontSize={"34px"} />{" "}
        </Box>
      )}
      {error && <Box display={"flex"} justifyContent="center" alignItems={"center"}>
        <Alert status='error' w="300px" >
          <AlertIcon />
          {`Something went Wrong 😒`}
        </Alert>
      </Box>}

      {/* UsersList */}
      <UserList users={users} />

    </Box>
  );
}

export default Users;