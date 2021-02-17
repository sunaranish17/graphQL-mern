import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag';

function Home() {
    const { loading, data } = useQuery(FETCH_POST_QUERY);

    if (data) {
        console.log(data);
    }

    return (
        <Grid columns={3} divided>
            <Grid.Row>
                <Grid.Column>
                    <Image src='/images/wireframe/media-paragraph.png' />
                </Grid.Column>
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
