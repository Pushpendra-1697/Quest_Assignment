import { Alert, AlertIcon, Box, Button, Input, useToast } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getPosts } from '../redux/Posts/post.action';
import { BiLoaderCircle } from "react-icons/bi";
import PostsList from '../Components/PostsList';
import { backend_url } from './BackendURL';

var totalPages = 20;
const getSocialMediaPosts = async () => {
  return fetch(`https://blog-database-ten.vercel.app/posts`).then((res) => res.json());
};
const Posts = () => {
  const [data, setData] = useState([]);
  const { loading, error, posts } = useSelector((store) => store.postManager);
  const [userName, setUserName] = useState('');
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const toast = useToast();


  useEffect(() => {
    dispatch(getPosts(page, userName));
  }, [page, userName]);


  useEffect(() => {
    getSocialMediaPosts().then((res) => setData(res)).catch((err) => console.log(err));
  }, []);

  const handlePage = (val) => {
    let value = val + page;
    setPage(value);
  };

  const seePostsHandle = async () => {
    try {
      let res = await fetch(`${backend_url}/posts/post`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      res = await res.json();
      toast({
        title: `${res.msg}`,
        status: "success",
        isClosable: true,
      });
      dispatch(getPosts());
    } catch (err) {
      console.log(err);
    }
  };


  // if (localStorage.getItem('name') === null) {
  //   return <Navigate to="/" />
  // }
  return (
    <Box>
      <Box textAlign={'center'}><Button onClick={seePostsHandle} bg='black' color={'white'}>See Posts</Button></Box>
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


      {/* Filter By Event Name */}
      <Box display={"flex"} justifyContent={"space-evenly"} m={{ base: "10% 0", sm: "10% 0", md: "3% 0", xl: "3% 0", "2xl": "3% 0" }}>
        <Input color={'green'} w={["160px", "160px", "240px"]} placeholder={"Enter User Name..."} value={userName} onChange={(e) => setUserName(e.target.value)} />
      </Box>


      {/* PostsList */}
      <PostsList posts={posts} />



      {/* Pagination */}
      <Box display={"flex"} alignItems="center" justifyContent={"center"} m="3% 0" gap={"5px"}>
        <Button variant={"outline"} color="green" onClick={() => setPage(1)}>First</Button>
        <Button variant={"outline"} color="green" isDisabled={page <= 1} onClick={() => handlePage(-1)}>◀️PRE</Button>
        <Button variant={"outline"} color="red" isDisabled={true}>{page}</Button>
        <Button variant={"outline"} color="green" isDisabled={page >= totalPages} onClick={() => handlePage(1)}>NEXT▶️</Button>
        <Button variant={"outline"} color="green" onClick={() => setPage(totalPages)}>Last</Button>
      </Box>

    </Box>
  );
}

export default Posts