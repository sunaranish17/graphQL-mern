import React from 'react'
import { Card, Icon, Label, Image } from 'semantic-ui-react'

function PostCard({ post: { body, createdAt, id, username, likeCount, commentCount, likes } }) {
    return (
        <Card>
            <Card.Content>
                <Image floated="right" size="mini" src="" />
                <Card.Header>{username}</Card.Header>
                <Card.Meta>{username}</Card.Meta>
            </Card.Content>
        </Card>
    )
}

export default PostCard
