import React, { useState } from 'react';

import { gql } from 'apollo-boost';
import { useQuery } from 'react-apollo';

import Styles from './Home.module.css';
import SinglePost from '../../Components/SinglePost.js';

function Home() {

const GET_POSTS = gql`

    query GetPosts {

        posts (pagination:{limit:10}) {
            data {
                id
                title
                body
                comments { id, body, author {name} }
                author { id, name}
            }
        }
    }
`;




    const [count, setCount] = useState(10);

    const { loading, error, data } = useQuery(GET_POSTS);
    //const thisPost = data.posts.data[0];
    const allPosts = data.posts.data;

    return (
        <div className={Styles.home}>
        <p>Select the number of posts to display:</p>
            <select onChange={() => setCount(1)} id="lang">
                 <option value="10">10 posts</option>
                 <option value="20">20 posts</option>
                 <option value="30">30 posts</option>
                 <option value="50">50 posts</option>
               </select>
            <h1>Posts</h1>
            {allPosts.slice(0, count).map((thisPost, ind) => (
            <SinglePost key={ind} post={thisPost}/>
            ))}
        </div>
    )
}

export default Home;