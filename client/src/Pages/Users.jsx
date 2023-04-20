import React from 'react';
import { Navigate } from 'react-router-dom';

const Users = () => {

  if (localStorage.getItem('name') === null) {
    return <Navigate to="/" />
  }
  return (
    <div>Users</div>
  )
}

export default Users;