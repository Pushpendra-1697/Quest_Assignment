import { Box } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addPosts } from '../redux/Posts/post.action';

const getPosts = async () => {
  return fetch(`https://jsonplaceholder.typicode.com/posts`).then((res) => res.json());
};
const Posts = () => {
  const [data, setData] = useState([]);
  const { loading, error, posts } = useSelector((store) => store.postManager);
  const dispatch = useDispatch();


  useEffect(() => {
    getPosts().then((res) => setData(res)).catch((err) => console.log(err));
  }, []);
  console.log(data)

  // if (data.length > 0) {
  //   dispatch(addPosts(data));
  // };

  // if (localStorage.getItem('name') === null) {
  //   return <Navigate to="/" />
  // }
  return (
    <Box>

    </Box>
  );
}

export default Posts