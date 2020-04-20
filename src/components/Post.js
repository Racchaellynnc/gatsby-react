import React from 'react'
import {Card, Button} from 'react-bootstrap';
import postStyles from './Post.module.css'

const Post = (props) => (
<div className={postStyles.container}> 
    <Card className={postStyles.card}>
        <Card.Img variant="top" src={props.image} alt="vr-blog"/>
        <Card.Body>
            <Card.Title dangerouslySetInnerHTML={{__html: props.title}}/>
            <Card.Text dangerouslySetInnerHTML={{__html: props.excerpt}}/>
            <Button variant="primary" href={props.readMore}>Read More</Button>
        </Card.Body>
    </Card>
</div>
)

export default Post;