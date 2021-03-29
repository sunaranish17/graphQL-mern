import { useQuery } from '@apollo/react-hooks';
import { gql } from 'graphql-tag';
import React from 'react'
import { Grid, Image } from 'semantic-ui-react';

function SinglePost(props) {
    const postId = props.match.params.postId;

    const { data: { getPost } } = useQuery(FETCH_POST_QUERY, {
        variables: {
            postId
        }
    })

    let postMarkup;

    if (!getPost) {
        postMarkup = <p>Loading post.....</p>
    } else {
        const { id, body, createdAt, username, comments, likes, likeCount, commentCount } = getPost;

        postMarkup = (
            <Grid>
                <Grid.Row>
                    <Grid.Column width={2}>
                        <Image
                            src="https://react.semantic-ui.com/images/avatar/large/molly.png"
                            size="small"
                            float="right"
                        />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        )
    }

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
