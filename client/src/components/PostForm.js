import React from 'react'
import { Button, Form } from 'semantic-ui-react'

import { useForm } from '../util/hooks'

function PostForm() {

    const onSubmit = () => {

    };

    return (
        <Form onSubmit={onSubmit}>
            <h2>Create a post:</h2>
            <Form.Field>
                <Form.Input
                    placeholder="Hi World"
                    name="body"
                    onChange={onChange}
                    value={values.body}
                />
                <Button type="submit" color="teal">
                    Submit
                </Button>
            </Form.Field>
        </Form>
    )
}

export default PostForm
