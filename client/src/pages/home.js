import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag';
import { Grid } from 'semantic-ui-react';
import { load } from 'dotenv/types';

function Home() {
    const { loading, data: { getPosts: posts } } = useQuery(FETCH_POST_QUERY);

    if (data) {
        console.log(data);
    }

    return (
        <Grid columns={3}>
            <Grid.Row>
                <h1>Recent Posts</h1>
            </Grid.Row>
            <Grid.Row>
                {loading ? (
                    <h1>Loading Posts...</h1>
                ) : (
                        posts && posts.map(post => (
                            <Grid.Column>
                            </Grid.Column>
                        ))
                    )}
            </Grid.Row>
        </Grid>
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
