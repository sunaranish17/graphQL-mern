import React from 'react'
import { Card, Icon, Label, Image, Button } from 'semantic-ui-react'
import {Link} from 'react-router-dom';
import moment from 'moment';

function PostCard({
    post: { body, createdAt, id, username, likeCount, commentCount, likes }
}) {
    return (
        <Card fluid>
            <Card.Content>
                <Image floated="right" size="mini" src="https://react.semantic-ui.com/images/avatar/large/molly.png" />
                <Card.Header>{username}</Card.Header>
                <Card.Meta as={Link} to={`/posts/${id}`}>{moment(createdAt).formatNow()}</Card.Meta>
                <Card.Description>
                    {body}
                </Card.Description>
            </Card.Content>
            <Card.Content extra>

            </Card.Content>
        </Card>
    )
}

export default PostCard
