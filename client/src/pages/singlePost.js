import { useQuery } from '@apollo/react-hooks';
import { gql } from 'graphql-tag';
import moment from 'moment';
import React, { useContext } from 'react'
import { Card, Grid, Image } from 'semantic-ui-react';
import { AuthContext } from '../context/auth';

function SinglePost(props) {
    const postId = props.match.params.postId;

    const { user } = useContext(AuthContext)

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

                    <Grid.Column width={10}>
                        <Card fluid>
                            <Card.Content>
                                <Card.Header>{username}</Card.Header>
                                <Card.Meta>{moment(createdAt).fromNow()}</Card.Meta>
                                <Card.Description>{body}</Card.Description>
                            </Card.Content>

                            <hr />

                            <Card.Content extra>
                                {/* <Lik */}
                            </Card.Content>
                        </Card>
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
