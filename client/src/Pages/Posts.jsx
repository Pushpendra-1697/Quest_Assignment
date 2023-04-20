import React from 'react'
import { Navigate } from 'react-router-dom'

const Posts = () => {

  if (localStorage.getItem('name') === null) {
    return <Navigate to="/" />
  }
  return (
    <div>Posts</div>
  )
}

export default Posts