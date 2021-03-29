import { gql } from 'graphql-tag';
import React from 'react'

function SinglePost(props) {
    const postId = props.match.params.postId;
    return (
        <div>

        </div>
    )
}

const FETCH_POST_QUERY = gql`
    query($postId: ID!) {
        getPost(postId: $postId) {
            id body createdAt username likeCount
        }
        likes{
            username
        }
        likeCount
        commentCount
        comments{
            id username createdAt body
        }
    }
`;

export default SinglePost
