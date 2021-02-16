import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql';

function Home() {
    return (
        <div>
            <h1>Home page</h1>
        </div>
    )
}

const FETCH_POST_QUERY = gql`
    {
        getPosts{
        id body createdAt username likeCount
        likes{
            username
        }
        commentCount
        comments{
            id username createdAt body
        }
    }
    }
`;

export default Home;
