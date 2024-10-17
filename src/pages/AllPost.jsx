import React, { useEffect, useState } from 'react';
import { Container, PostCard } from '../components';
import appwriteService from '../appwrite/config';
import { useSelector } from 'react-redux';

function AllPost() {
    const [posts, setPosts] = useState([]);
    const author = useSelector((state) => state.auth.userData)

    useEffect(() => {
        appwriteService.getPosts([]).then((posts) => {
            if (posts) {
                setPosts(posts.documents);
            }
        });
    }, []);
    
    return (
        <div className='w-full py-8'>
            <Container>
                <div className='flex flex-wrap justify-center items-center'>
                    {posts.map((post) => {
                        if(author.$id === post.userId){
                         return (
                            <div key={post.$id} className='p-2 w-3/4 sm:w-1/2 md:w-1/4'>
                            <PostCard {...post} />
                           </div>
                          )
                        }
})}
                </div>
            </Container>
        </div>
    );
    }

export default AllPost;
