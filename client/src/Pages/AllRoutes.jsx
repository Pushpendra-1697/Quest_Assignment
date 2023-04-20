import { Box } from '@chakra-ui/react'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './Login'
import Posts from './Posts'

const AllRoutes = () => {
  return (
    <Box>
        <Routes>
            <Route path='/' element={<Login />}></Route>
            <Route path='/posts' element={<Posts />}></Route>
        </Routes>
    </Box>
  )
}

export default AllRoutes;