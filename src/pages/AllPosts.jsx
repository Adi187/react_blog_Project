import React,{useState,useEffect} from 'react';
import {Container,PostCard} from '../components';
import appwriteService from '../appwrite/services'


function AllPosts() {
  const [posts,setPosts]=useState([])
  useEffect(()=>{
    appwriteService.getPosts([]).then((posts) => {
        if (posts) {
            setPosts(posts.documents)
        }
    })
  },[])
  

  return (
    <div className="py-8 w-full">
    <Container>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {posts.map((post) => (
          <div key={post.$id} className="p-4 bg-white rounded-lg shadow-md">
            <PostCard {...post} />
          </div>
        ))}
      </div>
    </Container>
  </div>
  
  )
}

export default AllPosts
