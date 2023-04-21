import { Table, TableContainer, Tbody, Td, Th, Thead, Tr, Text } from '@chakra-ui/react'
import React from 'react';
import { Link } from 'react-router-dom';
import { AiFillDelete } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { deleteUser } from '../redux/Users/user.action';

const UserList = ({ users }) => {
    const dispatch = useDispatch();

    const handleDeleteUser = (_id) => {
        dispatch(deleteUser(_id));
    };

    return (
        <>
            <TableContainer mt={["15%", "15%", "0%"]}>
                <Table size='sm' variant={"striped"}>
                    <Thead>
                        <Tr>
                            <Th>User Name</Th>
                            <Th>User Email</Th>
                            <Th>Login Time</Th>
                            <Th>More Details</Th>
                            <Th>Delete User</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {users && users.map(({ name, email, _id, createdAt }) =>
                            <Tr key={_id}>
                                <Td>{name}</Td>
                                <Td>{email}</Td>
                                <Td>{createdAt}</Td>
                                <Td><Link to={`/users/${_id}`}><Text color={'red'}>More Details</Text></Link></Td>
                                <Td><AiFillDelete color='red' fontSize={'23px'} onClick={() => handleDeleteUser(_id)} /></Td>
                            </Tr>
                        )}
                    </Tbody>
                </Table>
            </TableContainer>
        </>
    );
}

export default UserList;