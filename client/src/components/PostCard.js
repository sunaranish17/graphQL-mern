import React from 'react'
import { Card, Icon, Label, Image, Button } from 'semantic-ui-react'

function PostCard({ post: { body, createdAt, id, username, likeCount, commentCount, likes } }) {
    return (
        <Card>
            <Card.Content>
                <Image floated="right" size="mini" src="" />
                <Card.Header>{username}</Card.Header>
                <Card.Meta>{username}</Card.Meta>
                <Card.Description>
                BOSS
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <div>
                    <Button>
                        Approve
                    </Button>
                </div>
            </Card.Content>
        </Card>
    )
}

export default PostCard
